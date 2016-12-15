// Calculate the factorial of a number

const factorial = (num, accumulator) => {
    let acc;
    if (num === 1) {
        return accumulator;
    }
    if (accumulator){
        acc = accumulator * (num - 1);
    }
    else {
        acc = num * (num - 1)
    }
    return factorial(num - 1, acc);
}

console.log(factorial(1000));


// Better way

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1);

}
console.log(factorial(5));
