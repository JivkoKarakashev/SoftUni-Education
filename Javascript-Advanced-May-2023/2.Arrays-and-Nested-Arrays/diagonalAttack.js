function diagonalAttack(inputMatrix) {

    let inputMatrixColumns, inputMatrixRows, InitClmnIdx;
    inputMatrixColumns = inputMatrixRows = inputMatrix.length;
    InitClmnIdx = inputMatrixColumns - 1;

    const input2dMatrix = [];
    for (let currRowStr of inputMatrix) {
        let currRowArr = currRowStr.split(' ').map(el => Number(el));
        input2dMatrix.push(currRowArr);
    }

    const maindDiagonalArray = [];
    const secondDiagonalArray = [];

    const resultMatrix = JSON.parse(JSON.stringify(input2dMatrix));

    for (let i = 0; i < inputMatrixRows; i++) {
        maindDiagonalArray.push(input2dMatrix[i][i]);
        secondDiagonalArray.push(input2dMatrix[i][InitClmnIdx]);
        InitClmnIdx--;
    }

    const maindDiagonalSum = maindDiagonalArray.reduce((acc, currEl) => acc += currEl, 0);
    const secondDiagonalSum = secondDiagonalArray.reduce((acc, currEl) => acc += currEl, 0);

    if (maindDiagonalSum === secondDiagonalSum) {
        InitClmnIdx = inputMatrixColumns - 1;
        for (let currRowArr of resultMatrix) {
            currRowArr.fill(maindDiagonalSum);
        }
        for (let i = 0; i < resultMatrix.length; i++) {
            resultMatrix[i][i] = input2dMatrix[i][i];
            resultMatrix[i][InitClmnIdx] = input2dMatrix[i][InitClmnIdx];
            InitClmnIdx--;
        }
        for (let currRowArray of resultMatrix) {
            console.log(currRowArray.join(' '));            
        }
    } else {
        for (let currRowArray of input2dMatrix) {
            console.log(currRowArray.join(' '));            
        }
    }
}

diagonalAttack(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ])
console.log('------------');
diagonalAttack(
    [
        '1 1 1',
        '1 1 1',
        '1 1 0'
    ])