function sumOfNumbers(input){

    let n = String(input[0]); /* String(input[0]) == input[0].toString()    */
    let sum = 0;

    for ( let i = 0; i < n.length; i++){
        let digit = Number(n[i]);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers (["564891"])