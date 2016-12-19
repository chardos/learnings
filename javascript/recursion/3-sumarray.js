const sumArray = (numArray, accumulator = 0) => {
    if (numArray.length === 0) return accumulator;
    const [head, ...tail] = numArray;
    return sumArray(tail, accumulator + head);
}

console.log( sumArray([3,9,5,3]) );
