function evenAndOddSubtraction(inputArray){

    let sumEvens = 0;
    // let sumOdds = 0;
    
    for (let currElement = 0; currElement <= inputArray.length - 1; currElement++){

        let castToNumber = Number(inputArray[currElement]);
        if ( castToNumber % 2 === 0){
            sumEvens += castToNumber;
        } else {
            sumEvens -= castToNumber;
        }
    }
    console.log(sumEvens)
}

evenAndOddSubtraction([2,4,6,8,10])