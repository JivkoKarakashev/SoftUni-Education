function englishNameOfTheLastDigit(number){

    let numberToString = String(number);
    let lastDigitChar = numberToString[numberToString.length - 1];
    // console.log(lastDigitChar)
    switch (lastDigitChar){
        case "0": console.log("zero"); break;
        case "1": console.log("one"); break;
        case "2": console.log("two"); break;
        case "3": console.log("three"); break;
        case "4": console.log("four"); break;
        case "5": console.log("five"); break;
        case "6": console.log("six"); break;
        case "7": console.log("seven"); break;
        case "8": console.log("eight"); break;
        case "9": console.log("nine"); break;
        default: ; break;
    }
}

englishNameOfTheLastDigit(512)