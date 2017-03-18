// need to detect if is being called or not

var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            new Proxy(function(){}, handler);
    },
    apply: function(target, thisArg, argumentsList) {
        return new Proxy(function(){}, handler);
    }
};

var p = new Proxy(function(){}, handler);
