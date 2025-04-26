function sumOfOddNumbers(count){

    let sum = 0;
    let counter = 1;

    for (let currentNumber = 1; counter <= Number(count); currentNumber++){
        if (currentNumber % 2 !== 0){
            counter++;
            console.log(currentNumber)
            sum += currentNumber;
        }
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNumbers(5)
// sumOfOddNumbers(3)