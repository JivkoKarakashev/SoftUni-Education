function biggerHalf(inputArray) {

    const inputArrayLength = inputArray.length;
    const biggerHalfArrayLength = Math.ceil(inputArrayLength / 2);
    const biggerHalfArrayStartIdx = inputArrayLength - biggerHalfArrayLength;
    
    const biggerHalfArray = inputArray.sort((a ,b) => a - b).slice(biggerHalfArrayStartIdx);
    
    return (biggerHalfArray);
}

biggerHalf([4, 7, 2, 5])
console.log('-----------------');
biggerHalf([3, 19, 14, 7, 2, 19, 6])