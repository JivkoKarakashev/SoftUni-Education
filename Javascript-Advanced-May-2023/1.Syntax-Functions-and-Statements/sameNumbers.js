function sameNumbers(inputNum) {

    const inputNumToString = String(inputNum);
    const inputNumToStrArr = inputNumToString.split('').map(el => Number(el));
    const inputNumToStrArrLength = inputNumToStrArr.length;
    const sumDigits = inputNumToStrArr.reduce((acc, currDigit) => acc += currDigit);

    let sameNums = true;

    for (let i = 1; i < inputNumToStrArrLength; i++) {
        let currDigit = inputNumToStrArr[0];
        let nextDigit = inputNumToStrArr[i];
        if (currDigit !== nextDigit) {
            sameNums = false;
            break;
        }
    }
    console.log(sameNums);
    console.log(sumDigits);
}

sameNumbers(2222222)
console.log('--------------');
sameNumbers(1234)