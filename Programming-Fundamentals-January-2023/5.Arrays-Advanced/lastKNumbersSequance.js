function lastKNumbersSequance(sequenceLength, elementsCount){

    let numberSequnceArr = [1];
    
    for (let i = 1; i <sequenceLength; i++){

        let index = 0;
        
        if (i >= elementsCount){
            index = i - elementsCount;
        }
        let sum = 0;
        let previousNumSequnce = numberSequnceArr.slice(index);
        for (let currNum of previousNumSequnce){
            sum += currNum;
        }
        numberSequnceArr.push(sum);
    }
    console.log(numberSequnceArr.join(' '))
}

lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)