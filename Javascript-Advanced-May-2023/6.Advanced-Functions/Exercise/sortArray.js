function sortArray(inputArray, criteria) {

    funcObj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b -a,
    }
    return inputArray.sort(funcObj[criteria]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log('----------------------');
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));