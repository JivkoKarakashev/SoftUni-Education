function maxSequenceOfEqualElements(inputArray) {

    let newArray = [];
    let longSequenArray = [];
    let seqenceCounter = 0;
    let longSequenCounter = 0;
    let index = 0;
    newArray[index] = inputArray[0];
    seqenceCounter++;

    for (let i = 1; i <= inputArray.length - 1; i++) {
        let isIterated = false;

        while (newArray[index] === inputArray[i] && !isIterated) {
            isIterated = true;
            seqenceCounter++;
            index++;
            newArray[index] = inputArray[i];
        }
        if (newArray[index] !== inputArray[i]) {
            if (seqenceCounter > longSequenCounter){
                longSequenCounter = seqenceCounter;
                longSequenArray = [...newArray];
            }
            seqenceCounter = 0;
            newArray = [];
            index = 0;
            seqenceCounter++;
            newArray[index] = inputArray[i];
            // index++;
        }
    }
    if (seqenceCounter !== 0) {
        if (seqenceCounter > longSequenCounter){
            longSequenCounter = seqenceCounter;
            longSequenArray = [...newArray];
        }
        seqenceCounter = 0;
        newArray = [];
        index = 0;
    }
    console.log(longSequenArray.join(' '))
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])