function negativePositiveNumbers(inputArray) {

    const outputArray = [];

    for (const currEl of inputArray) {
        if (currEl < 0) {
            outputArray.unshift(currEl);
        } else {
            outputArray.push(currEl);
        }
    }

    for (const currEl of outputArray) {
        console.log(currEl);
    }
}

negativePositiveNumbers([7, -2, 8, 9])
console.log('---');
negativePositiveNumbers([3, -2, 0, -1])