function greatestCommonDivisorGCD(numA, numB) {

    let divisorsArray = [];
    const lowerNum = Math.min(numA, numB);

    for (let i = 1; i <= lowerNum; i++) {
        if (numA % i === 0 && numB % i === 0) {
            divisorsArray.push(i);
        }        
    }

    const greatCommDivisor = Math.max(...divisorsArray);
    console.log(greatCommDivisor);
}

greatestCommonDivisorGCD(15, 5)
console.log('---');
greatestCommonDivisorGCD(2154, 458)