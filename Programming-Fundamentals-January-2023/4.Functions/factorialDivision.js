function factorialDivision(numA, numB) {

    let factorialNumA = factorial(numA);
    let factorialNumB = factorial(numB);
    let division = factorialNumA / factorialNumB;
    console.log(division.toFixed(2));
    // console.log(factorialNumA)
    // console.log(factorialNumB)
        
    function factorial(num) {
        let factorialOfNum = 1;
        
        for (let i = num; i > 0; i--) {
            let currNum = i;
            factorialOfNum *= currNum;
        }        
        return factorialOfNum;
    }
    // factorial(numA);
    // console.log(factorial(numA))
}

factorialDivision(5, 2)
factorialDivision(6, 2)