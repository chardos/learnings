// need to detect if is being called or not

var errorSquasher = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            new Proxy(function(){}, errorSquasher);
    },
    apply: function(target, thisArg, argumentsList) {
        return new Proxy(function(){}, errorSquasher);
    }
};

var p = new Proxy(function(){}, errorSquasher);

// Can now get properties and call methods infinitely without errors
p.func().anotherFunc().aProperty.func()
