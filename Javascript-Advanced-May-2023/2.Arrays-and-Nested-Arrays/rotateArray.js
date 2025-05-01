function rotateArray(inputArray, rotations) {

    const inputArrayLength = inputArray.length;

    if (rotations > inputArrayLength) {
        rotations = rotations % inputArrayLength;
    }

    const firstArrPart = inputArray.slice(inputArrayLength - rotations);
    const secondArrPart = inputArray.slice(0, inputArrayLength - rotations);
    const rotatedArray = firstArrPart.concat(secondArrPart);
    console.log(rotatedArray.join(' '));
}

rotateArray(
    [
        '1',
        '2',
        '3',
        '4'
    ], 2)
console.log('-------');
rotateArray(
    [
        'Banana',
        'Orange',
        'Coconut',
        'Apple'
    ], 15)