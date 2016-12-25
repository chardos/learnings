function checkObject(object){
    if (typeof object === 'string'){
        return checkObject(string.split('.'));
    }

    
}

var foo = {bar: {baz: 'baz'}};

checkObject('foo.bar.baz');
