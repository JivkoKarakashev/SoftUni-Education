function charactersInRange(firstChar, secondChar){

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let stringFromCharsRange = '';

    startChar++;

    for (let i = startChar; i < endChar; i++){

        let currChar = String.fromCharCode(i);

        if (i === endChar - 1){
            stringFromCharsRange += `${currChar}`;
        } else {
            stringFromCharsRange += `${currChar} `;
        }
    }
    // console.log(stringFromCharsRange);
    return stringFromCharsRange;
}

charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')