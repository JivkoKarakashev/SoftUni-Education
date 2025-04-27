function processOddNumbers(inputArray) {

    let oddPositionArray = inputArray.filter((currEl, index) => {
        if (index % 2 !== 0) {
            if (currEl === 0){
                currEl = true;
            }
            return currEl;
        }
    })
        // console.log(oddPositionArray)
        .map((el) => el * 2)
        .reverse();
    console.log(oddPositionArray.join(' '))
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])