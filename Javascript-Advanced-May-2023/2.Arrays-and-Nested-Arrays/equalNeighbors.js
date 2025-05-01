function equalNeighbors(input2dMatrix) {

    const input2dMatrixLength = input2dMatrix.length;
    let equalNeighborCounter = 0;

    for (let i = 0; i < input2dMatrixLength - 1; i++) {

        let currRowArray = input2dMatrix[i];
        let nextRowArray = input2dMatrix[i + 1];
        let rowElementsCount = currRowArray.length;

        for (let j = 0; j < rowElementsCount; j++) {
            
            if (currRowArray[j] === nextRowArray[j]) {
                equalNeighborCounter++;
            }
        }
    }

    for (let currRowArray of input2dMatrix) {
        let currRowArrayLength = currRowArray.length;
        for (let i = 0; i < currRowArrayLength; i++) {
            if (currRowArray[i] === currRowArray[i + 1]) {
                equalNeighborCounter++;
            }
        }
    }
    // console.log(equalNeighborCounter);
    return equalNeighborCounter;
}

equalNeighbors(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ])
console.log('----');
equalNeighbors(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ])
console.log('----');
equalNeighbors(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ])