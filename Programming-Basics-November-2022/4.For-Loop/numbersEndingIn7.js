function numbersEndingIn7(){

    let digit =""
    for (let i = 1; i <= 1000; i++){
        digit = String(i);
        if (Number(digit[digit.length - 1]) === 7){
            console.log(digit)
        }
    }

}

numbersEndingIn7()