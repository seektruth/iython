var Visitor = require('./IythonVisitor.js');
var buildin = require('./buildin.js');

Interpreter = function() {
    Visitor.IythonVisitor.call(this); // inherit default listener
    this.rootScope = {};
    this.rootScope.print = buildin.print;
    this.rootScope.range = buildin.range;
    this.rootScope.map = buildin.map;
    this.rootScope.reduce = buildin.reduce;
    this.currentScope = this.rootScope;
    tokenFuncMap = {
        '+': function(a,b){
            return a+b;
        },
        '-': function(a,b){
            return a-b;
        },
        '*': function(a,b){
            return a*b;
        },
        '/': function(a,b){
            return a/b;
        },
        '%': function(a,b){
            return a%b;
        },
        '>': function(a,b){
            return a>b;
        },
        '<': function(a,b){
            return a<b;
        },
        '>=': function(a,b){
            return a>=b;
        },
        '<=': function(a,b){
            return a<=b;
        },
        '==':  function(a,b){
            return a===b;
        },
        '!=': function(a,b){
            return a!==b;
        },
        'and': function(a,b){
            return a&&b;
        },
        'or' : function(a,b){
            return a||b;
        }
    }
    return this;
};

Interpreter.prototype = Object.create(Visitor.IythonVisitor.prototype);
Interpreter.prototype.constructor = Interpreter;

Interpreter.prototype.visitStatements = function(ctx) {
    for(var i=0;i<ctx.getChildCount();i++){
        var re = this.visit(ctx.getChild(i));
    }
    return re;
};

Interpreter.prototype.visitStatement = function(ctx){
    //console.log(ctx.getText())
    return this.visit(ctx.getChild(0));
}

Interpreter.prototype.visitExpression = function(ctx) {
    //console.log("expresssion");

    //console.log(ctx.getChild(0).getText());
    var a = this.visit(ctx.getChild(0));
    //console.log(ctx.getChildCount());
   
    for (var i = 1; i<ctx.getChildCount();i+=2){
        var op = ctx.getChild(i).getText();
        var b = this.visit(ctx.getChild(i+1));
        a = tokenFuncMap[op](a,b);
    }
    return a;
};

Interpreter.prototype.visitAtom = function(ctx){
    var name = ctx.getText();
    if('0' <= name[0] && name[0]-'0'<='9'){// Int
        return parseInt(name);
    }
    else if(name[0] == '"') {//string
        return name.substring(1,name.length-1);
    }
    else if('a' <= name[0] && name[0] <= 'z'){ // name
        return this.visitName(ctx)
    }
    else //dict or list
        return this.visit(ctx.getChild(0));
}

Interpreter.prototype.visitDict = function(ctx){
    var dict = {};
    for(var i = 1;i + 2 < ctx.getChildCount() - 1;i += 4){
        var key = this.visit(ctx.getChild(i));
        var value = this.visit(ctx.getChild(i+2))
        dict[key] = value;
    }
    return dict;
}

Interpreter.prototype.visitList = function(ctx){
    var list = [];
    for(var i = 1;i<ctx.getChildCount()-1;i+=2){
        var value = this.visit(ctx.getChild(i));
        list.push(value);
    }
    return list;
}

Interpreter.prototype.visitAccess = function(ctx){
    var collection = this.visit(ctx.getChild(0));
    var key = this.visit(ctx.getChild(2));
    if (collection instanceof Array){
        if(typeof key !== 'number')
            throw {'message' : "the key to access a list must be a integer"};
        else if(Math.abs(key) >= collection.length)
            throw {'message' : "list index out of range"};
        else if (key < 0)
            return collection[collection.length+key];
        else 
            return collection[key];
    }
    else if (collection instanceof Object){
        var value = collection[key];   
        if (typeof value === 'undefined')
            throw {"message": ctx.getChild(0).getText() + "[" +key+"] is not defined"};
        return value;
    }
    else 
        throw {"message": "access Object must be dict or list"}
}

Interpreter.prototype.visitAssoc = function(ctx){
    var collection = this.visit(ctx.getChild(0));
    var key = this.visit(ctx.getChild(2));
    var value = this.visit(ctx.getChild(5));
    if (collection instanceof Array){
        if(typeof key !== 'number')
            throw {'message' : "the key to acsocation a list must be a integer"};
        collection[key] = value;
    }
    else if (collection instanceof Object){
        collection[key] = value;

    }
    else 
        throw {"message": "acsocation Object must be dict or list"};
    return value;
}

Interpreter.prototype.visitAssign = function(ctx){
    var name = ctx.getChild(0).getText();
    var value = this.visit(ctx.getChild(2));
    this.currentScope[name] = value;
    return value;
}

Interpreter.prototype.visitLambda = function(ctx){//匿名函数
    var func = {};
    func._args = this.visit(ctx.getChild(0));
    func._statements = ctx.getChild(3);
    func.envir = this.currentScope;
    return func;
}

Interpreter.prototype.visitDef = function(ctx){//函数的定义
    var name = ctx.getChild(1).getText();
    var func = {};
    func._args = this.visit(ctx.getChild(2));//函数的参数
    func._statements = ctx.getChild(5);//函数的执行代码
    func.envir = this.currentScope;//记录下当下的定义时的环境
    this.currentScope[name] = func;
    return func;
}

Interpreter.prototype.visitCall = function(ctx){//函数调用
    var func = this.visitName(ctx.getChild(0))
    if(! func instanceof Object && ! _args in func)
        throw {"message" : name+" is not a function"};
    var args = [];
    for(var i = 0; i < func._args.length; i++){
        args.push(this.visit(ctx.getChild(2*i+2)));
        //console.log("x"+this.visit(ctx.getChild(2*i+2)));
    }

    return this.CallFunc(func,args)
}

Interpreter.prototype.CallFunc = function(func,args){
    if(! func instanceof Object && ! _args in func)
        throw {"message" : name+" is not a function"};
    if (args.length !== func._args.length)
        throw {"message" : "argument num error"};
    if('call' in func){//如果是内置的函数
        args.push(this)
        return func.call(args);
    }
    var newScope = Object.create(func["envir"]);
    newScope._parent = this.currentScope;
    for(var i = 0; i < args.length; i++){
        newScope[func._args[i]] = args[i];
    }

    this.currentScope = newScope;//执行前进入作用域
    var re = this.visit(func._statements);
    this.currentScope = this.currentScope._parent;//执行后从作用域当中返回
    return re;
}

Interpreter.prototype.visitName = function(ctx){
    var name = ctx.getText()
    lookScope = this.currentScope;
    while(lookScope){//在环境当中查找变量
        if(name in lookScope)
            return lookScope[name];
        else 
            lookScope = lookScope._parent;
    }
    throw {'message': "unknown name "+name}
}

Interpreter.prototype.visitArgs = function(ctx){
    var args = [];
    for (var i = 1; i < ctx.getChildCount() - 1; i+=2){
        args.push(ctx.getChild(i).getText());
    }
    return args;
}

Interpreter.prototype.visitForloop = function(ctx){
    var name = ctx.getChild(1).getText();
    var list = this.visit(ctx.getChild(3));
    if (typeof list !== "object"){
        throw {"message" : typeof list + " is not iterable"};
    }
    var newScope = Object.create(this.currentScope);
    var re;
    newScope._parent = this.currentScope;
    this.currentScope = newScope;
    if(list instanceof Array){
        for(var i = 0; i<list.length ;i++){
            this.currentScope[name] = list[i];
            re = this.visit(ctx.getChild(6))
        }
    }
    else{
        for(var item in list){
            this.currentScope[name] = item;
            re = this.visit(ctx.getChild(6));
        }
    }
    this.currentScope = this.currentScope._parent;
    return re;
}

Interpreter.prototype.visitIfstat = function(ctx){
    var coni = this.visit(ctx.getChild(1));//条件判断
    var index = 7; //指向第一个else/elseif节点
    var re = null;
    if(coni){
        return this.visit(ctx.getChild(4));
    }
    while(index < ctx.getChildCount()){//有else或者elif节点
        var re = this.visit(ctx.getChild(index));
        if(re != null){
            return re;
        }
        index ++
    }
    return re;
}

Interpreter.prototype.visitElseif = function(ctx){
    var coni = this.visit(ctx.getChild(1));
    if(coni)
        return this.visit(ctx.getChild(4));
    else 
        return null;
}

Interpreter.prototype.visitElsestat = function(ctx){
    return this.visit(ctx.getChild(3));
} 

Interpreter.prototype.visitWhilestat = function(ctx){
    var coni = this.visit(ctx.getChild(1));
    while (coni){
        this.visit(ctx.getChild(4));
        coni = this.visit(ctx.getChild(1));
    }
    return null;
}

exports.Interpreter = Interpreter;