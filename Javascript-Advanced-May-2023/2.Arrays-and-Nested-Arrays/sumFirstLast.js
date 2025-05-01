function sumFirstLast(inputArray) {

    const sumFirstLast = Number(inputArray[0]) + Number(inputArray[inputArray.length - 1]);
    return console.log((sumFirstLast));
}

sumFirstLast(['20', '30', '40'])
console.log('---');
sumFirstLast(['5', '10'])