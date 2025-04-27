function sumFirstAndLastArrayElements(arrayOfNums){

    let firstNum = Number(arrayOfNums[0]);
    let lastNum = Number(arrayOfNums[arrayOfNums.length -1]);

    console.log(firstNum + lastNum);
}

sumFirstAndLastArrayElements([10, 17, 22, 33])