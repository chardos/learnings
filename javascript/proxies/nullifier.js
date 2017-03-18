// need to detect if is being called or not

var handler = {
    get: function(target, name) {
        // console.log(name);
        // console.log('typesof',typeof target[name]);
        return name in target ?
            target[name] :
            function(){
                return new Proxy({}, handler);
            };
    }
};

var p = new Proxy({}, handler);
