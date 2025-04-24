function accountBalance(input) {

    let index = 0;
    let command = input[index];
    index++;
    let balance = 0;

    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money > 0) {
            console.log(`Increase: ${money.toFixed(2)}`)
            command = input[index];
            index++;
            balance += money;
        }
        else{
            console.log("Invalid operation!")
            break;
        }        
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}

accountBalance (["120",
"-45.55",
"150"])

