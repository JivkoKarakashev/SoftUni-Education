function biggestElement(input2dMatrix) {

    let biggestEl = Number.MIN_SAFE_INTEGER;

    for (const currLineArray of input2dMatrix) {
        for (const currEl of currLineArray) {
            if (currEl > biggestEl) {
                biggestEl = currEl;
            }
        }
    }
    return(biggestEl);
}

biggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ])
console.log('---');
biggestElement(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ])