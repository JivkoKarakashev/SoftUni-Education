function arrayRotation(inputArray, rotations){

    for (let i = 0; i < rotations; i++){
        let elementToRotate = inputArray.shift();
        inputArray.push(elementToRotate);
    }
    console.log(inputArray.join(' '));
}

arrayRotation([2, 4, 15, 31], 5)