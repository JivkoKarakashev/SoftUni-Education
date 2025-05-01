function subSum(inputArr, startIdx, endIdx) {

    const inputArrLength = inputArr.length;
    const sumArr = (arr) => {
        arr = arr.map((el) => Number(el));
        const resultArr = arr.slice(startIdx, endIdx + 1);
        const sum = resultArr.reduce((acc, el) => acc += el, 0);
        return sum;
    };

    if (!Array.isArray(inputArr)) {
        return NaN;
    }
    if (startIdx < 0) {
        startIdx = 0;
    }
    if (endIdx >= inputArrLength) {
        endIdx = inputArrLength - 1;
    }
    const sum = sumArr(inputArr);
    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
console.log('----');
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log('----');
console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log('----');
console.log(subSum([], 1, 2))
console.log('----');
console.log(subSum('text', 0, 2))