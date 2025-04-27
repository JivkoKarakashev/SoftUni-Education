function simpleCalculator(numA, numB, operator) {

    let multiply = (numA, numB) => numA * numB;
    let divide = (numA, numB) => numA / numB;
    let add = (numA, numB) => numA + numB;
    let subtract = (numA, numB) => numA - numB;

    switch (operator) {
        case 'multiply': return (multiply(numA, numB));
        case 'divide': return (divide(numA, numB));
        case 'add': return (add(numA, numB));
        case 'subtract': return (subtract(numA, numB));
        default: ; break;
    }
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')