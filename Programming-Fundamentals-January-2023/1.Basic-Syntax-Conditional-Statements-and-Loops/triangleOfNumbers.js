function triangleOfNumbers(endNum){

    for (let startNum = 1; startNum <= endNum; startNum++){

        let numsToPrint = "";
        for (let row = 1; row <= startNum; row++){
            numsToPrint += `${startNum} `
        }
        console.log(numsToPrint)
    }
}

triangleOfNumbers(6)