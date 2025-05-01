function sumOfNumbersNM(strN, strM) {

    const numN = Number(strN);
    const numM = Number(strM);
    
    let sum = 0;

    for (let i = numN; i <= numM; i++) {
        sum += i;        
    }
    console.log(sum);
}

sumOfNumbersNM('1', '5')
console.log('----');
sumOfNumbersNM('-8', '20')
console.log('----');
sumOfNumbersNM('5', '1')