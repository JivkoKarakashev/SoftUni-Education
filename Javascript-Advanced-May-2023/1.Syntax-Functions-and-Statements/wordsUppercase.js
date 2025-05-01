function wordsUppercase(inputString) {

    const upperCaseWordsArr = [];
    const wordsRegex = /(?<word>\b\w+\b)/g;
    let extractedWord = wordsRegex.exec(inputString);

    while (extractedWord) {

        let upperCaseWord = extractedWord.groups['word'].toUpperCase();
        upperCaseWordsArr.push(upperCaseWord);
        extractedWord = wordsRegex.exec(inputString);
    }
    console.log(upperCaseWordsArr.join(', '));
}

wordsUppercase('Hi, how are you?')
console.log('-----------------');
wordsUppercase('hello')