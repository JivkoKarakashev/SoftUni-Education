function pascalCaseSplitter(inputString){

    let charsArray = inputString.split('');
    let charsArrayLength = charsArray.length;
    let startIdx = 0;
    let wordsArray = [];
    
    for (let i = 1; i < charsArrayLength; i++) {
        if (charsArray[i].charCodeAt(0) >= 65 && charsArray[i].charCodeAt(0) <= 90 || i === charsArrayLength - 1){
            let slicedWord = charsArray.slice(startIdx, i).join('');
            if (i === charsArrayLength - 1){
                if (charsArray[charsArrayLength - 1].charCodeAt(0) >= 65 && charsArray[charsArrayLength - 1].charCodeAt(0) <= 90){
                    slicedWord = charsArray.slice(startIdx, i).join('');
                    wordsArray.push(slicedWord);
                    wordsArray.push(charsArray[charsArrayLength - 1]);
                    break;
                }
                slicedWord = charsArray.slice(startIdx, i + 1).join('');
            }
            wordsArray.push(slicedWord);
            startIdx = i;
        }        
    }
    console.log(wordsArray.join(', '));
}

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// console.log('-------------------------------------------------------');
// pascalCaseSplitter('HoldTheDoor')
// console.log('-------------------------------------------------------');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo')
// console.log('-------------------------------------------------------');
pascalCaseSplitter('BARa')