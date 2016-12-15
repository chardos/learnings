// Calculate the factorial of a number
// Tail call optimized

let factorial = (num, accumulator = 1) => {
    if (num === 1) return accumulator;
    return factorial(num - 1, accumulator * (num));
}
console.log(factorial(6));


// Better way

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1);

}
console.log(factorial(5));
