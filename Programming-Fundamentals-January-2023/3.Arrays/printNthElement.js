function printNthElement(inputArray) {

    let NthElement = Number(inputArray[inputArray.length - 1]);    
    let collection = '';

    for (let i = 0; i < inputArray.length; i = i += NthElement) {
        let currElement = inputArray[i];
        if (i >= inputArray.length - 1){
            break;
        }
        if (i === inputArray.length - 1) {
            collection += (`${currElement}`);
        }
        collection += (`${currElement} `);
    }
    console.log(collection)
}

printNthElement(['1', '2', '3', '4', '5', '6'])