function ladybugs(input){

    let field = [];
    let fieldLength = field.length = input.shift();
    field.fill(0);
    let initialLadybugsPositions = input.shift()
        .split(' ')
        .map(Number);
    let inputLength = input.length;

    for (let position of initialLadybugsPositions) {
        if (position >= 0 && position < fieldLength) {
            field[position] = 1;
        }
    }

    for (let i = 0; i < inputLength; i++) {
        let currCommandAsArr = input[i].split(' ');
        let indexToMove = Number(currCommandAsArr[0]);
        let direction = currCommandAsArr[1];
        let stepsToMove = Number(currCommandAsArr[2]);

        if (indexToMove >= 0 && indexToMove < fieldLength && field[indexToMove] === 1) {
            field[indexToMove] = 0;

            if (direction === 'right' || (direction === 'left' && stepsToMove < 0)) {
                let indexToCheck = indexToMove + Math.abs(stepsToMove);

                while (field[indexToCheck] === 1) {
                    indexToCheck += Math.abs(stepsToMove);
                }

                if (indexToCheck < 0 || indexToCheck >= fieldLength) {
                    continue;
                } else {
                    field[indexToCheck] = 1;
                }

            } else if (direction === 'left' || (direction === 'right' && stepsToMove < 0)) {
                let indexToCheck = indexToMove - Math.abs(stepsToMove);

                while (field[indexToCheck] === 1) {
                    indexToCheck -= Math.abs(stepsToMove);
                }

                if (indexToCheck < 0 || indexToCheck >= fieldLength) {
                    continue;
                } else {
                    field[indexToCheck] = 1;
                }
            }
        } else {
            continue;
        }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ])