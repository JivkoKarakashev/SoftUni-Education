function condenseArrayToNumber(inputArray) {

    let condArray = [];
    condArray.length = inputArray.length;
    let currArray = [...inputArray];    

    if (condArray.length === 1){        
        condArray = [...currArray];
        condArray[0] = Number(currArray[0]);
    }

    while (currArray.length !== 1) {

        condArray.length --;
        
        for (let i = 0; i <= condArray.length - 1; i++) {
            
            condArray[i] = Number(currArray[i]) + Number(currArray[i + 1]);
        }
        currArray = [...condArray];
    }    
    console.log(condArray[0]);
}

condenseArrayToNumber([2])