function primeNumberChecker(number) {

    let isPrime = true;
    if (number >= 2) {
        isPrime
    }
    for (let i = 2; i <= number - 1; i++) {

        if (number % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime)
}

primeNumberChecker(7)