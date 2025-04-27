function specialNumbers(endNumber){

    
    for (let currNum = 1; currNum <= endNumber; currNum++){
        
        let NumToString = currNum.toString();
        let sumOfDigits = 0;
        
        for (let i = 0; i <= NumToString.length - 1; i++){
            let currDigit = NumToString[i];
            sumOfDigits += Number(currDigit);
            
        }
        let isSpecial = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11
            ? "True"
            : "False";
        console.log(`${currNum} -> ${isSpecial}`)
    }    
}

specialNumbers(20)