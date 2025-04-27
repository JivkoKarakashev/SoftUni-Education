function smallestTwoNumbers(inputArray){    

    let sortedArray = [];
    for (let i = 0; i < 2; i++){        
        
        let minNum = Math.min(...inputArray);
        let minNumIndex = inputArray.indexOf(minNum);
        inputArray.splice(minNumIndex, 1);
        sortedArray.push(minNum);
        // console.log(inputArray)
        // console.log(minNum)
        // console.log(minNumIndex)        
    }
    console.log(sortedArray.join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])