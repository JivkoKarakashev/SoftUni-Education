function factorialDivision(numA, numB) {

    let factorialOfNum = 1;
    let divA = factorialNum(numA);
    let divB = factorialNum(numB);
    let divisionResult = divA / divB;
    // console.log(divA)
    // console.log(divB)
    console.log(divisionResult.toFixed(2))

    function factorialNum(number) {
        factorialOfNum = 1;
        factorial(number);
        return factorialOfNum;
    }

    function factorial(num) {
        if (num > 1) {
            factorialOfNum *= num;
            num--;
            factorial(num);
        }
        return factorialOfNum;
    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)