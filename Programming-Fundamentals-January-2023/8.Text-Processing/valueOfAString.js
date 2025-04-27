function valueOfAString(inputArray) {

    const [text, condition] = [...inputArray];

    const isLetter = (char) => {
        return (/[a-zA-Z]/).test(char);
    }
    const asciiCode = (char) => {
        return char.charCodeAt(0);
    }

    const textLength = text.length;
    let totalAsciiSum = 0;

    for (let i = 0; i < textLength; i++) {
        let currChar = text[i];
        if (isLetter(currChar)) {
            switch (condition) {
                case 'UPPERCASE': {
                    if (currChar === currChar.toUpperCase()) {
                        totalAsciiSum += asciiCode(currChar);
                    }
                }; break;
                case 'LOWERCASE': {
                    if (currChar === currChar.toLowerCase()) {
                        totalAsciiSum += asciiCode(currChar);
                    }
                }; break;
                default: ; break;
            }
        }
    }
    console.log(`The total sum is: ${totalAsciiSum}`);
}

valueOfAString(
    [
        'HelloFromMyAwesomePROGRAM',
        'LOWERCASE'
    ])
console.log('---------------------');
valueOfAString(
    [
        'AC/DC',
        'UPPERCASE'
    ])
console.log('---------------------');
valueOfAString(
    [
        'ddZZ',
        'LOWERCASE'
    ])