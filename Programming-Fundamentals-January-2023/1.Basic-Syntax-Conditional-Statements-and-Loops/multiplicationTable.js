function multiplicationTable(number){

    for (let multiplier = 1; multiplier <= 10; multiplier++){

        let product = number * multiplier;
        console.log(`${number} X ${multiplier} = ${product}`)
    }
}

multiplicationTable(5)