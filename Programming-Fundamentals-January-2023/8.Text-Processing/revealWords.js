function revealWords(wordsString, sentence){

    const wordsArray = wordsString.split(', ');
    const sentenceArray = sentence.split(' ');

    for (let currWord of wordsArray) {
        let currWordLength = currWord.length;
        for (let word of sentenceArray) {
            if (word.charAt(0) === '*' && word.length === currWordLength){
                let idx = sentenceArray.indexOf(word);
                sentenceArray.splice(idx, 1, currWord);
            }
        }
    }
    let revealedSentence = sentenceArray.join(' ');
    console.log(revealedSentence);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages')