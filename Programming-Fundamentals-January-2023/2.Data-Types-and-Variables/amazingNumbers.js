function amazingNumbers(number) {

    let numbertoString = number.toString();
    let isAmazing = false;
    let digitsSum = 0;
    
    for (let i = 0; i <= numbertoString.length - 1; i++){

        let currentDigit = numbertoString[i];
        let currentDigitToNumber = Number(currentDigit);
        
        digitsSum += currentDigitToNumber;
    }

    let digitsSumtoString = digitsSum.toString();
    
    // for (let i = 0; i <= digitsSumtoString.length -1; i++){
    //     let currentDigit = digitsSumtoString[i];
    //     if (currentDigit == 9){
    //         isAmazing = true;
    //         break;
    //     }
    // }

    isAmazing = digitsSumtoString.includes("9");
    console.log(`${number} Amazing? ${(isAmazing) 
        ? "True" 
        : "False"}`)    
    
}

amazingNumbers(1233)