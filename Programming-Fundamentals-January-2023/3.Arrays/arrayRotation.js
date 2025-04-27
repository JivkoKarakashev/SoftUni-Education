function arrayRotation(inputArray, rotations){

    let newArray = [];
    let currArray = [...inputArray];
        
    if (rotations < 1){
        newArray = [...inputArray];
    }
    for (j = 1; j <= rotations; j++){

        for (let i = 0; i <= currArray.length - 1; i++){
            newArray[i] = currArray[i + 1];
        }
        newArray[newArray.length - 1] = currArray[0];
        currArray = [...newArray];
    }
    
    console.log(newArray.join(' '));
}

arrayRotation([2, 4, 15, 31], 1)