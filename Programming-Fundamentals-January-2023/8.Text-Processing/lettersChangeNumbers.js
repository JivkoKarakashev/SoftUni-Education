function lettersChangeNumbers(inputString) {

    const numberFromString = (str) => {
        return str.slice(1, str.length - 1);
    }

    const stringsArray = inputString.split(' ').filter(str => {
        isNaN(str[1]) && isNaN(str[str.length - 2])
        return str;
    });

    let sum = 0;
    const stringsArrayLength = stringsArray.length;

    for (let i = 0; i < stringsArrayLength; i++) {
        let preLetter = stringsArray[i][0];
        let currStringLength = stringsArray[i].length;
        let afterLetter = stringsArray[i][currStringLength - 1];
        let currentNumber = Number(numberFromString(stringsArray[i]));
        let upperPreLetter = preLetter.toUpperCase();
        let upperAfterLetter = afterLetter.toUpperCase();
        let asciiCodePreLetter = upperPreLetter.charCodeAt(0);
        let asciiCodeAfterLetter = upperAfterLetter.charCodeAt(0);
        let preLetterPosition = asciiCodePreLetter - 64;
        let afterLetterPosition = asciiCodeAfterLetter - 64;

        (preLetter === upperPreLetter)
            ? currentNumber /= preLetterPosition
            : currentNumber *= preLetterPosition;

        (afterLetter === upperAfterLetter)
            ? currentNumber -= afterLetterPosition
            : currentNumber += afterLetterPosition;

        sum += currentNumber;
    }
    console.log(sum.toFixed(2));
}

lettersChangeNumbers('A12b s17G')
console.log('--------');
lettersChangeNumbers('P34562Z q2576f   H456z')
console.log('--------');
lettersChangeNumbers('a1A')