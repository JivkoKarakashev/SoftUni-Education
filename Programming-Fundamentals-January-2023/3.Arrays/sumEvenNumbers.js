function sumEvenNumbers(inputArray){

    let sumEvenNums = 0;

    for (let currNum of inputArray){
        currNum = Number(currNum);
        if (currNum % 2 === 0){
            sumEvenNums += currNum;
        }
    }
    console.log(sumEvenNums)
}

sumEvenNumbers(['3','5','7','9'])