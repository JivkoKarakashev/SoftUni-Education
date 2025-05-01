function diagonalSums(input2dMatrix) {

    let mainDiagSum = 0;
    let secondDiagSum = 0;
    let currRowNum = 0;

    const input2dMatrixLength = input2dMatrix.length;
    const lastElement = input2dMatrixLength- 1;
    
    for (let i = 0; i < input2dMatrixLength; i++) {
        let currRow = input2dMatrix[i];
        for (let j = 0; j < input2dMatrixLength; j++) {
            if (j === currRowNum) {
                mainDiagSum += currRow[j];
            }
            if (j === lastElement - currRowNum) {
                secondDiagSum += currRow[j];
            }
        }
        currRowNum++;
    }
    console.log(mainDiagSum + ' ' + secondDiagSum);
}

diagonalSums(
    [
        [20, 40],
        [10, 60]
    ])
console.log('-----');
diagonalSums(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ])