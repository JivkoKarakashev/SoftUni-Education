function magicMatrices(input2dMatrix) {

    isMagical = true;
    const input2dMatrixLength = input2dMatrix.length;
    const magicSum = input2dMatrix[0].reduce((acc, curEl) => acc += curEl, 0);
    
    for (let i = 0; i < input2dMatrixLength; i++) {

        let curColumnSum = 0;
        let nextRowSum = input2dMatrix[i].reduce((acc, curEl) => acc += curEl, 0);
        
        
        for (let j = 0; j < input2dMatrixLength; j++) {
            curColumnSum += input2dMatrix[j][i];
        }

        if (nextRowSum !== magicSum || curColumnSum !== magicSum) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}

magicMatrices(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ])
console.log('-----');
magicMatrices(
    [
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ])
console.log('-----');
magicMatrices(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ])