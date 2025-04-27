function palindromeIntegers(inputArray){
    let inputArrayLength = inputArray.length;
    
    for (let i = 0; i < inputArrayLength; i++){

        // let currNum = inputArray[i];
        let currNumAsString = String(inputArray[i]);
        let currNumAsStringLength = currNumAsString.length;
        let currNumReverse = '';
       
        for (let j = currNumAsStringLength - 1; j >= 0; j--){
            let currDigit = currNumAsString[j];
            currNumReverse += currDigit;
        }
        
        if (currNumAsString === currNumReverse){
            console.log('true');
        } else {
            console.log('false')
        }
    }
}

// palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])