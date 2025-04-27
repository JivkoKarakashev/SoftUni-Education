function asciiSumator(inputArray){

    if (inputArray[0] > inputArray[1]){
        [inputArray[0], inputArray[1]] = [inputArray[1], inputArray[0]];
    }
    const startAscii = inputArray[0].charCodeAt(0);
    const endAscii = inputArray[1].charCodeAt(0);
    const str = inputArray[2];
    const strLength = str.length;
    let sumChars = 0;
    
    const charInRange = (char) => {
        if (char.charCodeAt(0) > startAscii && char.charCodeAt(0) < endAscii){
            return char.charCodeAt(0);  
        }
        return 0;
    }


    for (let i = 0; i < strLength; i++) {
        sumChars += charInRange(str[i]);        
    }
    console.log(sumChars);
}

asciiSumator(
[   
    '.',
    '@',
    'dsg12gr5653feee5'
])
console.log('----');
asciiSumator(
[   
    '?',
    'E',
    '@ABCEF'
])
console.log('----');
asciiSumator(
[
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'
])