function processOddPositions(inputArray) {

    const oddPosition = (arr) => {

        const arrLength = arr.length;
        const oddPosNumsArray = [];

        for (let i = 0; i < arrLength; i++) {
            if (i % 2 !== 0) {
                oddPosNumsArray.push(arr[i]);
            }            
        }
        return oddPosNumsArray;
    }

    const oddPositionsNums = oddPosition(inputArray).map(el => el * 2).reverse();
    console.log(oddPositionsNums.join(' '));
}

processOddPositions([10, 15, 20, 25])
console.log('-----');
processOddPositions([3, 0, 10, 4, 7, 3])