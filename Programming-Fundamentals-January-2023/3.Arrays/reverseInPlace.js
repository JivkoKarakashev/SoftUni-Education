function reverseInPlace(inputArray){

    let output = '';

    for (let i = inputArray.length - 1; i >= 0; i--){
        let currElement = inputArray[i];
        if (i === 0){
            output += (`${currElement}`);
        } else {
            output += (`${currElement} `)
        }
    }
    console.log(output);
}

reverseInPlace(['33', '123', '0', 'dd'])