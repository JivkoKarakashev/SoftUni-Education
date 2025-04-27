function reverseInPlace(inputArray){

    for (let i = 0; i < inputArray.length / 2; i++){
        let tempElement = inputArray[i];

        inputArray[i] = inputArray[inputArray.length - 1 - i];
        inputArray[inputArray.length - 1 - i] = tempElement;
    }
    console.log(inputArray.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])