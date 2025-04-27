function addAndSubtract(inputArray){

    let newArray = [...inputArray];
    let sumInputArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i <= newArray.length - 1; i++){
        let currElementValue = Number(newArray[i]);
        if (currElementValue % 2 === 0){
            currElementValue += i;
        } else {
            currElementValue -= i;
        }
        newArray[i] = currElementValue;
        sumNewArray += currElementValue;
    }
    for (let currElementValue of inputArray){
        currElementValue = Number(currElementValue);
        sumInputArray += currElementValue;
    }
    
    console.log(newArray);
    console.log(sumInputArray);
    console.log(sumNewArray);
}

addAndSubtract([-5, 11, 3, 0, 2])