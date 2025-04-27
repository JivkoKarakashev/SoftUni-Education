function oddAndEvenSum(inputNum){

    let stringFromNum = String(inputNum);
    let stringLength = stringFromNum.length;
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < stringLength; i++){
        let currDigit = Number(stringFromNum[i]);

        if (currDigit % 2 === 0){
            sumEven += currDigit;
        } else {
            sumOdd += currDigit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)    
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)