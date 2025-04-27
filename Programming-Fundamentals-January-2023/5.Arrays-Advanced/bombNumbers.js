function bombNumbers(initialSequnceArr, bombArr) {
    
    let [spcBombNum, bombPower] = [...bombArr];
    let remainSequenceArr = [];
    let bufferArray = [];

    let bombIndex = initialSequnceArr.indexOf(spcBombNum);
    let leftSequence = (buffArr, initArr, fillArr, bombInd, bombPow) => {
        let startIndex = 0;
        if (bombInd - bombPow <= 0){
            return fillArr;
        } else {
            startIndex = bombInd - bombPow;
        }
        buffArr = initArr.slice(0, startIndex);
        elementPush(buffArr, fillArr);
        return fillArr;
    }
    let rightSequence = (buffArr, initArr, fillArr, bombInd, bombPow) => {
        let initArrLength = initArr.length;
        let endIndex = 0;
        if (bombInd + bombPow >= initArrLength){
            return fillArr;
        } else {
            endIndex = bombInd + bombPow;
        }
        buffArr = initArr.slice(endIndex + 1, initArrLength);
        elementPush(buffArr, fillArr);
        return fillArr;
    }
    let elementPush = (arr, arrToFill) => {
        for (let el of arr) {
            arrToFill.push(el);
        }
    }
    let elSum = (arr) => {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum;
    }    
    
    while (initialSequnceArr.includes(spcBombNum)){
        bombIndex = initialSequnceArr.indexOf(spcBombNum); 
        remainSequenceArr = [];
        remainSequenceArr = leftSequence(bufferArray, initialSequnceArr, remainSequenceArr, bombIndex, bombPower);
        remainSequenceArr = rightSequence(bufferArray, initialSequnceArr, remainSequenceArr, bombIndex, bombPower);
        initialSequnceArr = [...remainSequenceArr];
    }
    let sum = elSum(remainSequenceArr);
    // console.log(remainSequenceArr)
    console.log(sum)    
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
console.log('---')
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
console.log('---')
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])
console.log('---')
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])