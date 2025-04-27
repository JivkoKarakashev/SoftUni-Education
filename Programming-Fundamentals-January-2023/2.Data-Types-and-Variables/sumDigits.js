function sumDigits(number) {

    let numToString = number.toString();
    let sumofDigits = 0;

    for (let i = 0; i <= numToString.length - 1; i++){

        let currDigit = Number(numToString[i]);
        sumofDigits += currDigit;
    }
    console.log(sumofDigits)
}
sumDigits(543)