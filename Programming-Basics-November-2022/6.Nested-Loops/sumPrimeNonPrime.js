function sumPrimeNonPrime(input) {

    let index = 0;
    let currInput = input[index];           // i = 0
    let sumPrimes = 0;
    let sumNonPrimes = 0;
    while (currInput !== "stop") {
        index++;                            // i = 1
        currInput = Number(currInput);

        let isPrime = true;
        if (currInput >= 2) {
            isPrime
        }
        if (currInput < 0){
            console.log(`Number is negative.`)
            
            currInput = input[index];       // i = 1
            continue;
        }

        for (let i = 2; i <= Math.sqrt(currInput); i++) {
            if (currInput % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            // console.log(`${currInput} - is Prime`)
            sumPrimes += currInput;
        }
        else {
            // console.log(`${currInput} - is not Prime`)
            sumNonPrimes += currInput;
        }
        currInput = input[index];           // i = 1
    }
    console.log(`Sum of all prime numbers is: ${sumPrimes}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`)
}

sumPrimeNonPrime (["0",
"-9",
"0",
"stop"])




