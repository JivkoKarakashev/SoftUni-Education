function movingTarget(inputArray) {

    let targetSequence = inputArray
        .shift()
        .split(' ')
        .map(Number);

    const shoot = (arr, idx, power) =>{
        let arrLength = arr.length;
        if (idx < 0 || idx >= arrLength){
            return arr;
        } else {
            let value = arr[idx];
            value -= power;
            if (value <= 0){
                arr.splice(idx, 1);
            } else {
                arr[idx] = value;
            }
        }
        return arr;
    }
    const add = (arr, idx, value) =>{
        let arrLength = arr.length;
        if (idx < 0 || idx >= arrLength){
            console.log('Invalid placement!')
            return arr;
        } else {
            arr.splice(idx, 0, value);
        }
        return arr;
    }
    const strike = (arr, idx, radius) =>{
        let arrLength = arr.length;
        let leftRadiusIdx = idx - radius;
        let rightRadiusIdx = idx + radius;
        let diameter = radius * 2 + 1;
        
        if (leftRadiusIdx < 0 || rightRadiusIdx >= arrLength){
            console.log('Strike missed!')
            return arr;
        } else {
            arr.splice(leftRadiusIdx, diameter);
        }
        return arr;
    }

    let index = 0;
    let currentLine = inputArray[index];
    while (currentLine !== 'End') {
        let command;
        let idx;
        let power;
        let value;
        let radius;
        let currentLineArray = currentLine.split(' ');
        command = currentLineArray.shift();
        currentLineArray = currentLineArray.map(Number);
        // console.log(currentLineArray)
        if (command === 'Shoot') {
            [idx, power] = [...currentLineArray];
        } else if (command === ('Add')) {
            [idx, value] = [...currentLineArray];
        } else if (command === ('Strike')) {
            [idx, radius] = [...currentLineArray];
        }
        switch (command) {
            case 'Shoot': shoot(targetSequence, idx, power); break;
            case 'Add': add(targetSequence, idx, value); break;
            case 'Strike': strike(targetSequence, idx, radius); break;
            default: ; break;
        }
        // console.log(targetSequence);
        index++;
        currentLine = inputArray[index];
    }
    console.log(targetSequence.join('|'))
}

// movingTarget(["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"])
// console.log('------------------')
// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"])
// console.log('------------------')
movingTarget(["1 2 3 4 5",
// "Strike 4 1",
// "Add 4 9",
"Shoot -1 1",
"End"])