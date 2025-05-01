function mathOperations(numA, numB, operator) {

    const operatorObj = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
        '%': (num1, num2) => num1 % num2,
        '**': (num1, num2) => num1 ** num2,
    }

    const result = operatorObj[operator](numA, numB);
    console.log(result);
}

mathOperations(5, 6, '+')
console.log('----');
mathOperations(3, 5.5, '*')