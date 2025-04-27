function repeatString(word, repeatCount){

    let concatWord = '';

    for (let i = 0; i < repeatCount; i++){
        concatWord += word;
    }
    return concatWord;
}

let result = repeatString("String", 2);
console.log(result);

// repeatString("abc", 3);
// repeatString("String", 2);