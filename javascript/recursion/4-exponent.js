const exponentOf = (num, exponent, current = 1, result = 1) => {
    const newResult = result * num;
    const allDone = current === exponent && newResult;
    return allDone || exponentOf(num, exponent, current + 1, newResult);
}
exponentOf(2,3);
