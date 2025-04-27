function arrayManipulator(numSequenceArray, manipulatorArray) {

    let add = (arr, idx, el) => {
        arr.splice(idx, 0, el);
        return arr;
    }
    let addMany = (arr, idx, els) => {
        arr.splice(idx, 0, els);
        arr = arr.join(',')
            .split(',');
        arr = arr.map(Number);
        return arr;
    }
    let contains = (arr, el) => {
        if (arr.includes(el)) {
            let index = arr.indexOf(el);
            console.log(index);
        } else {
            console.log('-1')
        }
    }
    let remove = (arr, idx) => {
        arr.splice(idx, 1);
        return arr;
    }
    let shift = (arr, idx) => {
        let arrLength = arr.length;
        if (idx > 0) {
            if (idx > arrLength) {
                idx = idx % arrLength;
                if (idx === 0 || arrLength === Math.abs(idx)) {
                    return arr;
                } else {
                    let shifted = arr.splice(0, idx);
                    arr.push(shifted);
                }
            } else {
                let shifted = arr.splice(0, idx);
                arr.push(shifted);
            }
        } else if (idx === 0 || arrLength === Math.abs(idx)) {
            return arr;
        } else if (idx < 0) {
            if (Math.abs(idx) > arrLength) {
                idx = arrLength - (Math.abs(idx) % arrLength);
                if (idx === 0 || arrLength === Math.abs(idx)) {
                    return arr;
                } else {
                    let shifted = arr.splice(0, idx);
                    arr.push(shifted);
                }
            } else {
                idx = arrLength - Math.abs(idx);
                let shifted = arr.splice(0, idx);
                arr.push(shifted);
            }
        }        
        arr = arr.join(',')
            .split(',');
        arr = arr.map(Number);
        return arr;
    }
    let sumPairs = (arr) => {
        let buffArr = [];
        let arrLength = arr.length;

        for (let i = 0; i < arrLength; i += 2) {
            let sum = 0;
            if (i === (arrLength - 1)) {
                let lastEl = Number(arr[i]);
                sum += lastEl;
            } else {
                let firstEl = arr[i];
                let secondEl = arr[i + 1];
                sum += (firstEl + secondEl);
            }
            buffArr.push(sum);
        }
        arr = [...buffArr];
        buffArr = [];
        return arr;
    }
    let print = (arr) => {
        console.log(`[ ${arr.join(', ')} ]`)
    }

    let index = 0;
    let element;
    let idx;
    let numSequence;
    let currentLineArray = manipulatorArray[index].split(' ');
    let command = currentLineArray[index];

    while (command !== 'print') {        

        if (currentLineArray.includes('addMany')) {
            [, idx, ...numSequence] = [...currentLineArray];
            numSequence = numSequence.map(Number);
            idx = Number(idx);

        } else if (currentLineArray.includes('add')) {
            [, idx, element] = [...currentLineArray];
            idx = Number(idx);
            element = Number(element);

        } else if (currentLineArray.includes('contains')) {
            [, element] = [...currentLineArray];
            element = Number(element);

        } else if (currentLineArray.includes('remove')) {
            [, idx] = [...currentLineArray];
            idx = Number(idx);

        } else if (currentLineArray.includes('shift')) {
            [, idx] = [...currentLineArray];
            idx = Number(idx);
        }
        switch (command) {
            case 'addMany': numSequenceArray = addMany(numSequenceArray, idx, numSequence); break;
            case 'add': numSequenceArray = add(numSequenceArray, idx, element); break;
            case 'contains': contains(numSequenceArray, element); break;
            case 'remove': numSequenceArray = remove(numSequenceArray, idx); break;
            case 'shift': numSequenceArray = shift(numSequenceArray, idx); break;
            case 'sumPairs': numSequenceArray = sumPairs(numSequenceArray); break;            
            default: ; break;
        }
        index++;
        currentLineArray = manipulatorArray[index].split(' ');
        command = currentLineArray[0];
    }
    if (command === 'print') {
        print(numSequenceArray);
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])
console.log('--------------------------')
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
console.log('--------------------------')
arrayManipulator([1, 2, 3, 4, 5],
    ['shift -1', 'print'])