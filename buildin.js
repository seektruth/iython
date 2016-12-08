print = {
    _args : ['a'],
    call : function(args){
        console.log(args[0]);
        return args[0];
    }
}

range = {
    _args : ['a'],
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

map = {
    _args : ['set',"func"],
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

reduce = {
    _args : ['set','func'],
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


exports.print = print;
exports.range = range;
exports.map = map;
exports.reduce = reduce;