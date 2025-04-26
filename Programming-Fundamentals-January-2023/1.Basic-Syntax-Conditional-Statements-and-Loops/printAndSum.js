function printAndSum(startNum, endNum){

    let sum = 0;
    let numToString = "";

    for (let currentNum = startNum; currentNum <= endNum; currentNum++){

        sum += currentNum;
        numToString += `${currentNum} `;
    }
    console.log(numToString)
    console.log(`Sum: ${sum}`)
}

printAndSum(50, 60)