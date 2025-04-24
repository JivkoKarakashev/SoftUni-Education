function vacation(input) {

    let vacCost = Number(input[0]);
    let savedMoney = Number(input[1]);
    let index = 0;
    let dayCount = 0;
    let spendDaysCount = 0;
    index += 2;                                          // i = 2
    let operation = input[index];                        // i = 2

    while (index < input.length - 1) {
        dayCount++;
        index++;                                         // i = 3

        if (operation === "spend") {
            spendDaysCount++;
            let spendAmount = Number(input[index]);      // i = 3
            savedMoney -= spendAmount;
            if (savedMoney < 0) {
                savedMoney = 0;
            }
            if (spendDaysCount === 5) {
                console.log(`You can't save the money.`)
                console.log(`${dayCount}`)
                // console.log(savedMoney)
                break;
            }                        
        }
        else if (operation === "save") {
            spendDaysCount = 0;
            let savedAmount = Number(input[index]);      // i = 3
            savedMoney += savedAmount;
        }
        index++;                                         // i = 4
        operation = input[index];                        // i = 4        
    }
    // console.log(savedMoney)    
    if (savedMoney >= vacCost) {
        console.log(`You saved the money for ${dayCount} days.`)
    }
}

vacation (["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

















































