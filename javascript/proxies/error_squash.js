// need to detect if is being called or not

var errorSquasher = {
    get: function(target) {
        return new Proxy(target, errorSquasher);
    },
    apply: function(target) {
        return new Proxy(target, errorSquasher);
    },
    construct: function(target) {
        return new Proxy(target, errorSquasher);
    },
};
var p = new Proxy(function(){}, errorSquasher);

// Can now get properties and call methods infinitely without errors
p.func().anotherFunc().aProperty.func()
