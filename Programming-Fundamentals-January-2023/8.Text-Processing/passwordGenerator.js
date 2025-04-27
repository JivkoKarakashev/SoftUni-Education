function passwordGenerator(inputArray) {

    const hasVowels = (arr) => {
        if (arr.includes('a') || arr.includes('e') || arr.includes('i') || arr.includes('o') || arr.includes('u')){
            return true;
        }
        return false;
    }
    const isVowel = (char) => {
        if (char === 'a' || char === 'e'  || char === 'i' || char === 'o' || char === 'u'){
            return true;
        }
        return false;
    }
    
    const concatenatedWordsArr = inputArray[0].concat(inputArray[1]).split('');
    const thirdWordString = inputArray[2];
    const thirdWordStringLength = thirdWordString.length;
    
    while (hasVowels(concatenatedWordsArr)){
        for (let i = 0; i < thirdWordStringLength; i++) {
            let currThirdWrordChar = thirdWordString[i];
            for (let currChar of concatenatedWordsArr) {
                if (isVowel(currChar)){
                    let idx = concatenatedWordsArr.indexOf(currChar);
                    concatenatedWordsArr.splice(idx, 1, currThirdWrordChar.toUpperCase());
                    break;
                }
            }
        }
    }
    console.log(`Your generated password is ${concatenatedWordsArr.reverse().join('')}`);
}

passwordGenerator(
    [
        'ilovepizza',
        'ihatevegetables',
        'orange'
    ])
console.log('-------------------------------------------------------------');
passwordGenerator(
    [
        'easymoneyeazylife', 
        'atleasttencharacters', 
        'absolute'
    ])
