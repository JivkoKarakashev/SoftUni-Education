function printEveryNthElementFromAnArray(inputArray, stepIdx) {

    const inputArrayLength = inputArray.length;
    const outputArray = [];

    for (let i = 0; i < inputArrayLength; i += stepIdx) {
        outputArray.push(inputArray[i]);
    }
    return outputArray;
}

printEveryNthElementFromAnArray(
    [
        '5',
        '20',
        '31',
        '4',
        '20'
    ], 2)
console.log('-------------------');
printEveryNthElementFromAnArray(
    [
        'dsa',
        'asd',
        'test',
        'tset'
    ], 2)
console.log('-------------------');
printEveryNthElementFromAnArray(
    [
        '1',
        '2',
        '3',
        '4',
        '5'
    ], 6)