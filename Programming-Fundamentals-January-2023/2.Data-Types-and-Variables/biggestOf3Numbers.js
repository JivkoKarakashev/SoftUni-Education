function biggestOf3Numbers(numA, numB, numC) {

    let biggestNum = Number.MIN_SAFE_INTEGER;

    if (numA >= numB && numA >= numC) {
        biggestNum = numA;
    }
    if (numB >= numA && numB >= numC) {
        biggestNum = numB;
    }
    if (numC >= numB && numC >= numA) {
        biggestNum = numC;
    }
    console.log(biggestNum)
}

biggestOf3Numbers(43,
    43.2,
    43.1
    )