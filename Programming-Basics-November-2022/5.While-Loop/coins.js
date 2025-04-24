function coins(input) {

    // let currInput = input[0]; // Num --> to Str
    // let changeArray = change.split("")    
    let change = Number(input[0]);                 // cents
    // let coins = 0;               // coins retruned at iteration
    let totalCoins = 0;             // total coins returned
    // let leftChange = 0;          // cents left after iteration
    // let index = 0;
    // let str = ""

    // if (command[index] == 0) {      // first number check
    // while (index < command.length) {
    //     if (command[index] == 0 || command[index] == ".") {     //check for number
    //         index++;
    //         continue;
    //     }
    //     // console.log(command[index])            
    //     let changeToCoins = String(command[index]);
    //     str += changeToCoins;            
    //     index++;
    // }
    // change = Number(str)
    // console.log(change)
    //     index++;        
    //     if (command[index] == ".") {
    //         index++;
    //     }
    //     let changeToCoins = String(command[index]);
    //     str += changeToCoins;        
    //     index++;
    //     changeToCoins = String(command[index]);
    //     str += changeToCoins;
    //     change = Number(str) / 100;
    //     index++;
    // }
    // else if (command[index] != 0) {
    //     change = Number(command);
    // }
    // change = Number(currInput);
    while (change != 0) {
        if (change >= 2) {
            let leftChange = change % 2;
            let coinsChange = Math.floor(change / 2);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 1 && change < 2) {
            leftChange = (change % 1).toFixed(2);
            coinsChange = Math.floor(change / 1);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 0.5 && change < 1) {
            leftChange = (change % 0.5).toFixed(2);
            coinsChange = Math.floor(change / 0.5);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 0.2 && change < 0.5) {
            leftChange = (change % 0.2).toFixed(2);
            coinsChange = Math.floor(change / 0.2);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 0.1 && change < 0.2) {
            leftChange = (change % 0.1).toFixed(2);
            coinsChange = Math.floor(change / 0.1);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 0.05 && change < 0.1) {
            leftChange = (change % 0.05).toFixed(2);
            coinsChange = Math.floor(change / 0.05);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;
        }
        else if (change >= 0.02 && change < 0.05) {

            leftChange = (change % 0.02).toFixed(2);
            coinsChange = Math.floor(change / 0.02);
            totalCoins += coinsChange;
            change = leftChange;
            if (change == 0)
                break;

        }
        else if (change == 0.01) {
            
            totalCoins += 1;
            change = 0;
            if (change == 0)
                break;
        }
    }

    // console.log(str)
    // console.log(change)
    console.log(totalCoins)
}

coins(["0.58"])