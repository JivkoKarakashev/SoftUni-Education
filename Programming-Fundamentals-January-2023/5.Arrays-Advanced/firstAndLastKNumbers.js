function firstAndLastKNumbers(inputArray){

    let elementsCount = inputArray.shift();
        
    let firstElements = inputArray.slice(0, elementsCount);
    let lastElements  = inputArray.slice(inputArray.length - elementsCount);
    console.log(firstElements.join(' '))
    console.log(lastElements.join(' '))
}

firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])