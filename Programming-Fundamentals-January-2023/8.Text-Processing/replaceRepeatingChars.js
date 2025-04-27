function replaceRepeatingChars(inputString){

    const charsArray = inputString.split('');
    const outPutArr = [];
    outPutArr.push(charsArray[0]);
    let outPutStr = outPutArr.join('');    
    let charsArrayLength = charsArray.length;

    for (let i = 1; i < charsArrayLength; i++) {
        if (charsArray[i - 1] !== charsArray [i]){
            outPutArr.push(charsArray[i]);
            outPutStr = outPutStr.concat(charsArray[i]);
        }
    }
    console.log(outPutStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
console.log('--------------------');
replaceRepeatingChars('qqqwerqwecccwd')