function charactersInRange(firstChar, secondChar){

    let startChar = firstChar.charCodeAt(0);
    let endChar = secondChar.charCodeAt(0);
    let buffChar;
    let charsInRangeArray = [];
    
    if (startChar > endChar){
        buffChar = startChar;
        startChar = endChar;
        endChar = buffChar;
    }
    startChar++;
    
    for (let i = startChar; i < endChar; i++){

        let currChar = String.fromCharCode(i);
        charsInRangeArray.push(currChar);
    }

    // console.log(charsInRangeArray.join(' '));
    return charsInRangeArray.join(' ');
}

charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')