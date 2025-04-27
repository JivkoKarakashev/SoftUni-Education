function rotateArray(inputArray){

    let rotatedArray = [];

    for (let i = 0; i < inputArray.length - 1; i++){

        let currElement = inputArray[i];
        rotatedArray.push(currElement);
    }
    // console.log(rotatedArray)

    for (let i = 0; i < inputArray[inputArray.length - 1]; i++){
        
        let splicedElement = rotatedArray[rotatedArray.length - 1];
        rotatedArray.splice(rotatedArray.length - 1, 1);
        rotatedArray.splice(0,0,splicedElement);
        // console.log(splicedElement);
    }
    console.log(rotatedArray.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])