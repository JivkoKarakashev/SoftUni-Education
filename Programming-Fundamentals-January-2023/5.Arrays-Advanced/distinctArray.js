function distinctArray(inputArray){

    let inputArrayLength = inputArray.length;
    let filteredArray = [];

    for (let i = 0; i < inputArrayLength; i++){
        let currNum = inputArray[i];
        if (filteredArray.includes(currNum)){
            continue
        } else {
            filteredArray.push(currNum);
        }
    }
    console.log(filteredArray.join(' '))
}

distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])