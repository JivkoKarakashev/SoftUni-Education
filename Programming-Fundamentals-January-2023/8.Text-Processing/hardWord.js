function hardWord(inputArray) {

    const letterWordsArray = inputArray[0].split(' ');
    const letterWordsArrayLength = letterWordsArray.length;

    for (let i = 0; i < letterWordsArrayLength; i++) {
        if (letterWordsArray[i].includes('_')) {
            let hasPunctuation = false;
            let letterHoleLength = letterWordsArray[i].length;
            let lastChar;
            if (letterWordsArray[i][letterHoleLength - 1] !== '_') {
                hasPunctuation = true;
                lastChar = letterWordsArray[i][letterHoleLength - 1];
                letterHoleLength = letterWordsArray[i].length - 1;
            }
            for (let unknownWord of inputArray[1]) {
                let currUnknownWordLength = unknownWord.length;
                if (currUnknownWordLength === letterHoleLength) {
                    if (hasPunctuation) {
                        unknownWord = unknownWord.concat(lastChar);
                    }
                    letterWordsArray.splice(i, 1, unknownWord);
                }
            }
        }
    }
    console.log(letterWordsArray.join(' '));
}

hardWord(
    [
        'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
    ])