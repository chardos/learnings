function add5(num){
    return num + 5;
}
function multiply3(num){
    return num * 3;
}
function halve(num){
    return num / 2;
}

// console.log(multiply3(add5(10)));


function pipeline(...fns){
    return function(value){
        fns.unshift(value);
        return fns.reduce((value, fn) => {
            return fn(value);
        })
    }
}

const addAndMultiply = pipeline(
    add5,
    multiply3,
    halve
)
console.log(addAndMultiply(10));
