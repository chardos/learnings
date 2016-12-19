let range = (num1, num2, arr = [num2]) => {
    if (num1 === num2) return arr;
    return range(num1, num2 - 1, [num2 - 1, ...arr])
}

// 3, 7, [7]
// 3, 6, [6, 7]
// 3, 5, [5, 6, 7]
// 3, 4, [4, 5, 6, 7]
// 3, 3, [3, 4, 5, 6, 7]



// RANGE NYAN VERSION

function range(start, end, step = 1, current = start, result = []) {
    const newResult = [
        ...result,
        current
    ];

    const allDone = current >= end && newResult;

    return allDone || range(start, end, step, current + step, newResult);
}
