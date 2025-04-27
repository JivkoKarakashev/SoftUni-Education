function smallestOfThreeNumbers(numA, numB, numC) {
  

    let smallestNum = Number.MAX_SAFE_INTEGER;

    if (numA <= numB && numA <= numC) {
        smallestNum = numA;
    }
    if (numB <= numA && numB <= numC) {
        smallestNum = numB;
    }
    if (numC <= numB && numC <= numA) {
        smallestNum = numC;
    }
    return (smallestNum);
}

smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)