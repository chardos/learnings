function add5(num){
    return num + 5;
}
function multiply3(num){
    return num * 3;
}
function halve(num){
    return num / 2;
}
function dollarize(num){
    return '$' + num;
}

function pipeline(...args){
    return function(value){
        return args.reduce((value, arg) => {
            const isFunction = typeof arg === 'function';
            const isArray = typeof arg === 'object';
            const shouldRun = isFunction ||
                              isArray && arg[1];
            const fn = isFunction ? arg : arg[0];

            if(shouldRun){ return fn(value) }
            else { return value }
        }, value);
    }
}

const addAndMultiply = pipeline(
    [add5, true],
    multiply3,
    halve
)
const withDollarize = pipeline(
    addAndMultiply,
    dollarize
);

console.log(addAndMultiply(10));
console.log(withDollarize(10));
