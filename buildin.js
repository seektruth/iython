var print = {
    _args : ['a'],
    _default: [],
    call : function(args){
        args[1].outBuffer = args[1].outBuffer + args[0] + '\n';
        return args[0];
    }
}

var range = {
    _args : ['a'],
    _default: [],
    call : function(args){
        var hi = args[0];
        if(typeof hi !== 'number' && hi < 0){
            throw {'message': "arguement of range must be positive integer"};
        }
        var re = [];
        for(var i = 0;i < hi; i++){
            re.push(i);
        }
        return re;
    }
}

var map = {
    _args : ['set',"func"],
    _default: [],
    call : function(args){
        var set = args[0];
        var func = args[1];
        var inter = args[2];
        var mapFunction = function(a){
            return inter.CallFunc(func,[a])
        };
        return set.map(mapFunction);
    }
}

var reduce = {
    _args : ['set','func'],
    _default: [],
    call : function(args){
        var set = args[0];
        var func = args[1];
        var inter = args[2];
        var reduceFunction = function(a,b){
                return inter.CallFunc(func,[a,b]);
        }
        return set.reduce(reduceFunction);
    }
}

var push = {
    _args : ['list','item'],
    _default: [],
    call : function(args){
        var list = args[0];
        var item = args[1];
        if(! list instanceof Array)
            throw {"message" : "push function must operate on list"}
        list.push(item);
        return item;
    }
}

var pop = {
    _args : ['list'],
    _default: [],
    call : function(args){
        var list = args[0];
        if(! list instanceof Array)
            throw {"message" : "pop function must operate on list"}
        return list.pop();
    }
}


exports.print = print;
exports.range = range;
exports.map = map;
exports.reduce = reduce;
exports.pop = pop;
exports.push = push;