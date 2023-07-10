var compose = function(functions){
    return function(x) {
        var accum=x;
        for(var i=functions.length-1; i>=0;i--){
            accum=functions[i](accum)
        }
        return accum;
    }
}
