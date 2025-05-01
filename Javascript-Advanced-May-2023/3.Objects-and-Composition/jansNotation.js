function jansNotation(inputArray) {

    const operationFunc = (resultArr, istruction) => {

        const resultArrLength = resultArr.length;
        if (resultArrLength < 2) {
            return 'error'
        }
        const operand2 = resultArr.pop();
        const operand1 = resultArr.pop();
        
        const operationsObj = {
            '+': operand1 + operand2,
            '-': operand1 - operand2,
            '*': operand1 * operand2,
            '/': operand1 / operand2,
        };
        const newOperand = operationsObj[istruction];
        resultArr.push(newOperand);
    }
    const resultArr = [];

    for (const istruction of inputArray) {
        if (typeof istruction === 'number') {
            resultArr.push(istruction);
        } else {
            const retUrn = operationFunc(resultArr, istruction);
            if (retUrn === 'error') {
                console.log('Error: not enough operands!');
                return;
            }
        }
    }
    if (resultArr.length > 1) {
        console.log('Error: too many operands!');
        return;
    }
    console.log(resultArr[0]);
}

jansNotation([3, 4, '+'])
console.log('----------');
jansNotation([5, 3, 4, '*', '-'])
console.log('----------');
jansNotation([7, 33, 8, '-'])
console.log('----------');
jansNotation([15, '/'])