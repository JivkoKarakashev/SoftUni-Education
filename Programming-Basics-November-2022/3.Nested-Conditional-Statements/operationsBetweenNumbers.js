function operationsBetweenNumbers(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    
    if (operator === "+"){
        result = num1 + num2;
        // console.log(result)
        if ( result % 2 === 0){
            let type = "even"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
        else{
            type = "odd"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
    }
    else if (operator === "-"){
        result = num1 - num2;
        // console.log(result)
        if ( result % 2 === 0){
            let type = "even"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
        else{
            type = "odd"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
    }
    else if (operator === "*"){
        result = num1 * num2;
        // console.log(result)
        if ( result % 2 === 0){
            let type = "even"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
        else{
            type = "odd"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`)
        }
    }
    else if (operator === "/"){
        result = num1 / num2;
        // console.log(result.toFixed(2));
        if (num2 !== 0){
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
        }
        else{
            console.log(`Cannot divide ${num1} by zero`)
        }
    }
    else if (operator === "%"){
        result = num1 % num2;
        // console.log(result)
        if (num2 !== 0){
            console.log(`${num1} ${operator} ${num2} = ${result}`)
        }
        else{
            console.log(`Cannot divide ${num1} by zero`)
        }
    }
}

operationsBetweenNumbers (["10",
"0",
"%"])





