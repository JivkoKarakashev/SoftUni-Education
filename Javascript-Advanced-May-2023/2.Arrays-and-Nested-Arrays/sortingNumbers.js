function sortingNumbers(inputArray) {

    let loopsCount = inputArray.length / 2;
    let isOdd = false;

    if (!Number.isInteger(loopsCount)) {
        isOdd = true;        
        loopsCount = Math.ceil(loopsCount);        
    }    

    const inputArrayCopy = [...inputArray];
    const sortedArray = [];

    for (let i = 0; i < loopsCount; i++) {

        let smallest = Math.min(...inputArrayCopy);
        let biggest = Math.max(...inputArrayCopy);
        if (isOdd && i === loopsCount - 1) {
            sortedArray.push(smallest);
            break;
        }
        sortedArray.push(smallest, biggest);
        let smallestIdx = inputArrayCopy.indexOf(smallest);
        inputArrayCopy.splice(smallestIdx, 1);
        let biggesttIdx = inputArrayCopy.indexOf(biggest);
        inputArrayCopy.splice(biggesttIdx, 1);
    }
    // console.log(sortedArray);
    return sortedArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log('-------------------------');
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 32])