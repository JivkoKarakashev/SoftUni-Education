function ladybugs(inputArray) {

    let fieldSize = Number(inputArray[0]);
    let initLdyBgsArr = inputArray[1].split(' ');
    let fieldSizeArr = [];
    let emptyCell = 0;
    let filledCell = 1;

    for (let i = 0; i < fieldSize; i++) {
        fieldSizeArr[i] = emptyCell;
    }

    for (let i = 0; i < initLdyBgsArr.length; i++) {
        let ldyBuginitPos = Number(initLdyBgsArr[i]);
        if (ldyBuginitPos >= 0 && ldyBuginitPos < fieldSizeArr.length) {
            fieldSizeArr[ldyBuginitPos] = filledCell;
        }
    }
    // console.log(fieldSizeArr)

    for (let j = 2; j < inputArray.length; j++) {
        let movesArr = inputArray[j].split(' ');

        let index = Number(movesArr[0]);
        let direction = movesArr[1];
        let cellstoMove = Number(movesArr[2]);
        // console.log(index)        
        // console.log(direction)        
        // console.log(cellstoMove)        


        switch (direction) {
            case 'right':
                if (cellstoMove < 0) {
                    cellstoMove *= 1;
                }; break;
            case 'left':
                if (cellstoMove < 0) {
                    cellstoMove *= -1;
                } else if (cellstoMove >= 0) {
                    cellstoMove *= -1;
                }; break;
            default: ; break;
        }
                
        let moveToIndex = index + cellstoMove;     // index cell ldyBug end position
        
        if (fieldSizeArr[index] !== filledCell) {
            // console.log('No, ladybug there!')
            continue;
        } else {
            fieldSizeArr[index] = emptyCell;
        }

        if (moveToIndex < 0 || moveToIndex >= fieldSizeArr.length){
            continue;
        } else if (fieldSizeArr[moveToIndex] === filledCell) {
            while (fieldSizeArr[moveToIndex] === filledCell) {
                if (moveToIndex < 0 || moveToIndex >= fieldSizeArr.length) {
                    // console.log('Ladybug flies out of the field, it is gone!')
                    break;
                }
                moveToIndex += cellstoMove;
            }
        }

        if (moveToIndex < fieldSizeArr.length
            && moveToIndex >= 0) {
            fieldSizeArr[moveToIndex] = filledCell;     // cell value of ldyBug end position
        }       
        // console.log(fieldSizeArr)
    }
    // console.log(fieldSizeArr)
    console.log(fieldSizeArr.join(' '));
}

// ladybugs([ 3, '0 1',
// '0 right 1',
// '2 right 1' ])

// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1'])

ladybugs([5, '2',
    '2 left 2',
    '0 left -2',
    '2 left 2'])