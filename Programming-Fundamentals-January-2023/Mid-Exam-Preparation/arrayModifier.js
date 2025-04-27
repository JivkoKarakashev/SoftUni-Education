function arrayModifier(inputArray) {
    let elementsSequence = inputArray
        .shift()
        .split(' ')
        .map(Number);

    let swap = (arr, idx1, idz2) =>{        
        [arr[idx1], arr[idz2]] = [arr[idz2], arr[idx1]];
        return arr;
    }

    let multiply = (arr, idx1, idx2) =>{
        let element1 = arr[idx1];
        let element2 = arr[idx2];
        let result = element1 * element2;
        arr.splice(idx1, 1, result);
        return arr;
    }
    
    let index = 0;
    let currentLine = inputArray[index];
    while (currentLine !== 'end'){
        let command;
        let index1;
        let index2;
        let currentLineArray = currentLine.split(' ');
        if (currentLineArray.includes('decrease')){
            elementsSequence = elementsSequence.map(el => el - 1);
        } else {
            [command, index1, index2] = [...currentLineArray];
            index1 = Number(index1);
            index2 = Number(index2);            
        }
        switch (command){
            case 'swap': elementsSequence = swap(elementsSequence, index1, index2); break;
            case 'multiply': elementsSequence = multiply(elementsSequence, index1, index2); break;
            default: ; break;
        }
        // console.log(elementsSequence)
        index++;
        currentLine = inputArray[index];
    }
    console.log(elementsSequence.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
console.log('---------------------------------')
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])