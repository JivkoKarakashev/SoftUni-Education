function largestNumber(numA, numB, numC) {

    let largestNum = numC;

    if (numA > numB && numA > numC) {
        largestNum = numA;
    } else if (numB > numA && numB > numC) {
        largestNum = numB;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
largestNumber(-3, 0, -22.5);