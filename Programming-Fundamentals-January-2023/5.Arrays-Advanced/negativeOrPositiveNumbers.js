function negativeOrPositiveNumbers(inputArray){    
    
    let sortedArray = [];
    
    for (let currElement of inputArray){
        currElement = parseInt(currElement);
        if (currElement < 0){
            sortedArray.unshift(currElement);
        } else {
            sortedArray.push(currElement);
        }
    }
    console.log(sortedArray.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
console.log('--------------')
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])