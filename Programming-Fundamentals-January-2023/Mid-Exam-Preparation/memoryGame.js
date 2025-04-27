function memoryGame(inputArray) {

    let elementsSequence = inputArray
        .shift()
        .split(' ');
    for (let i = 0; i < elementsSequence.length; i++) {
        let currentElement = Number(elementsSequence[i]);
        if (Number.isInteger(currentElement)) {
            elementsSequence[i] = currentElement;
        }
    }
    let elementsSequenceLength = elementsSequence.length;

    let index = 0;
    let movesCount = 0;
    let command = inputArray[index];
    
    while (command !== 'end') {
        if (elementsSequenceLength === 0) {            
            break;
        }
        movesCount++;
        let commandArray = command.split(' ');
        let [idx1, idx2] = [...commandArray];
        idx1 = Number(idx1);
        idx2 = Number(idx2);
        if (idx1 === idx2
            || idx1 < 0 || idx1 >= elementsSequenceLength
            || idx2 < 0 || idx2 >= elementsSequenceLength) {
            console.log('Invalid input! Adding additional elements to the board')
            elementsSequenceLength = elementsSequence.length;
            let insertIdx = (elementsSequenceLength / 2);
            let insertElements = (`-${movesCount}a -${movesCount}a`);
            elementsSequence.splice(insertIdx, 0, insertElements);
            elementsSequence = elementsSequence.join(' ')
                .split(' ');
            for (let i = 0; i < elementsSequence.length; i++) {
                let currentElement = Number(elementsSequence[i]);
                if (Number.isInteger(currentElement)) {
                    elementsSequence[i] = currentElement;
                }
            }
            // console.log(elementsSequence)
        }
        else if (elementsSequence[idx1] === elementsSequence[idx2]) {
            let matchedElement = elementsSequence[idx1] = elementsSequence[idx2];
            let matchedElementIndex = elementsSequence.indexOf(matchedElement);
            console.log(`Congrats! You have found matching elements - ${matchedElement}!`)
            elementsSequence.splice(matchedElementIndex, 1);
            matchedElementIndex = elementsSequence.indexOf(matchedElement);
            elementsSequence.splice(matchedElementIndex, 1);
            elementsSequenceLength = elementsSequence.length;
        } else if (elementsSequence[idx1] !== elementsSequence[idx2]) {
            console.log('Try again!')
        }
        index++;
        command = inputArray[index];
        // console.log(idx1, idx2)
    }
    if (elementsSequenceLength !== 0) {
        console.log(`Sorry you lose :\(\n${elementsSequence.join(' ')}`)
    } else if (elementsSequenceLength === 0){
        console.log(`You have won in ${movesCount} turns!`)            
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"])
console.log('-------------------------------')
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
console.log('-------------------------------')
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
console.log('-------------------------------')
memoryGame([
    "1 1 2 2 3 3",      
    "5 4",
    "2 3",
    "1 0",
    "end"    
])