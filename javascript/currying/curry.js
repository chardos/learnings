module.exports = curry;

function curry(fn){
    // look at the expected number of args
    const expectedNumArgs = fn.length;
    // compare it to the actual number of args
    function argumentCounter(...args){
        // if args length equal expected
        if(expectedNumArgs === args.length){
            return fn(...args);
        }
        else {
            //return function partially filled
            return function(...moreArgs){
                return argumentCounter(...args, ...moreArgs)
            }
        }
        console.log(args);
    };

    return argumentCounter;
}

var add = curry(function(num1, num2){
    return num1 + num2;
})

var describePerson = curry(function(name, age, gender){
    return `I'm ${name}, I'm ${age} years old, and I'm ${gender}`;
})
