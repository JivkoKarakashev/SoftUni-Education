function maxNumber(inputArray){

    let currArray = [...inputArray];
    let newArray = [];
    let topedArray =[];
    newArray.length = currArray.length - 1;
    let topInteger;
    let isTopInteger = false;
    let falseCounter = 0;
    let index = 0;
    
    while (currArray.length > 1){

        for (let i = 0; i < currArray.length - 1; i++){
            let currElement = Number(currArray[0]);
            let nextElelemt = Number(currArray[i + 1]);
            
            if (currElement > nextElelemt){
                isTopInteger = true;
                topInteger = currElement;
            } else {
                falseCounter++;
            }
            newArray[i] = currArray[i + 1];
        }
        // console.log(topInteger)
        // console.log(newArray)
        if (isTopInteger && falseCounter === 0){
            topedArray[index] = topInteger;
            index++;
        }
        currArray = [...newArray];
        newArray = [];
        falseCounter = 0;
    }
    topedArray[index] = currArray[0];
    console.log(topedArray.join(' '));
}

maxNumber([1, 4, 3, 2])