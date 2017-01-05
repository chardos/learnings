function curry(fn){
    // look at the expected number of args
    const expectedNumArgs = fn.length;
    // compare it to the actual number of args
    return function(...args){
        // if args length equal expected
        if(expectedNumArgs === args.length){
            console.log('full');
        }
        console.log(args);
        return fn(...args);
    };
}

var add = curry(function(num1, num2){
    return num1 + num2;
})
