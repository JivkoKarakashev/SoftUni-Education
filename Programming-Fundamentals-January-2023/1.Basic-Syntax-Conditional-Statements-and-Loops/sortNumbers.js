function sortNumbers(numA, numB, numC) {

    let minNum = Number.MAX_SAFE_INTEGER;       // lo
    let maxNum = Number.MIN_SAFE_INTEGER;       // hi
    let middNum = Number.MIN_SAFE_INTEGER + 1;  // midd

    if (numA > numB) {
        middNum = numA;
        minNum = numB;
    } else {
        middNum = numB;
        minNum = numA;
    }
    if (middNum > numC) {
        maxNum = middNum;
        if (minNum > numC) {
            middNum = minNum;
            minNum = numC;
        } else {
            middNum = numC;
        }
    } else {
        maxNum = numC;
    }
    console.log(maxNum)
    console.log(middNum)
    console.log(minNum)
}

sortNumbers(3,
    2,
    1
)