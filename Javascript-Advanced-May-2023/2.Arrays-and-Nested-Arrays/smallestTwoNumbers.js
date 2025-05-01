function smallestTwoNumbers(inputArray) {

    let smallestTwo = inputArray.sort((a, b) => a - b).slice(0, 2);
    return console.log(smallestTwo.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])
console.log('---');
smallestTwoNumbers([3, 0, 10, 4, 7, 3])