function magicSum(inputArray, magicSum){

    // let newArray = [];
    
    for (let i = 0; i <= inputArray.length - 1; i++){
        let currElement = Number(inputArray[i]);
        for (let j = i + 1; j <= inputArray.length - 1; j++){

            let nextElement = Number(inputArray[j]);            
            let sum = 0;               
            sum += (currElement + nextElement);

            if (sum === magicSum){
                console.log(`${currElement} ${nextElement}`)
            }
        }             
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)