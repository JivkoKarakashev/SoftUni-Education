function numbers(input) {
    let numsArray = input.split(' ');
    numsArray = numsArray.map(Number);
    let numsArrayLength = numsArray.length;
    let avgVlaue = numsArray.reduce((sum, current) => sum += current, 0) / numsArrayLength;
    numsArray.sort((a, b) => a - b);
    let biggersThanAverage = numsArray.filter(x => x > avgVlaue);
    let biggersThanAverageLength = biggersThanAverage.length;
    if (biggersThanAverageLength > 0){
        if (biggersThanAverageLength > 5) {
            biggersThanAverage = biggersThanAverage.splice(biggersThanAverageLength - 5);
        }
        let biggersThanAverageReversed = biggersThanAverage.reverse();
        console.log(biggersThanAverageReversed.join(' '));
    }
    else if(biggersThanAverageLength === 0) {
        console.log('No');
    }
}

numbers('10 20 30 40 50')
console.log('----------------------')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log('----------------------')
numbers('1')
console.log('----------------------')
numbers('-1 -2 -3 -4 -5 -6')
