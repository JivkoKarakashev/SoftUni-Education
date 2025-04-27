function modernTimesOfHashTag(inputString) {

    const inputArray = inputString.split(' ');

    const isLetter = (char) => {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
        || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            return true;
        }
        return false;
    }

    for (let currWord of inputArray) {
        let isSpecial = true;
        let currWordLength = currWord.length;
        if (currWord.charAt(0) === '#' && currWordLength > 1) {
            for (let i = 1; i < currWordLength; i++) {
                let currChar = currWord[i];
                if(!isLetter(currChar)){
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial){
                let printWord = currWord.slice(1);
                console.log(printWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log('------------');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
console.log('------------');
modernTimesOfHashTag('The symbol ## is known # variously in English-speaking #regions as the #number sign')