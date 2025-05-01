function evenPositionElements(inputArray) {

    const evenPosElementsArr = [];
    const inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i++) {
        if (i % 2 == 0) {
            evenPosElementsArr.push(inputArray[i]);            
        }        
    }
    return console.log(evenPosElementsArr.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60'])
console.log('---------');
evenPositionElements(['5', '10'])