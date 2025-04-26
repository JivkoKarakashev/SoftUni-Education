function bitcoinMining(input) {

    // 1 Bitcoin    = 11949.16 lv.
    // 1 g of gold	= 67.51 lv.    
    let index = 0;
    let money = 0;
    let bicoinCounter = 0;
    let firstDayPurchase = 0;
    
    for (let currentDay = 1; currentDay <= input.length; currentDay++) {
        let goldMinedAmount = Number(input[index]); // i = 0
        if (currentDay % 3 === 0) {
            goldMinedAmount -= goldMinedAmount * 30 / 100
        }
        let goldToMoneyExchange = goldMinedAmount * 67.51;
        money += goldToMoneyExchange;
        if (money >= 11949.16) {
            bicoinCounter += Math.floor(money / 11949.16);
            money %= 11949.16;
            if (firstDayPurchase < 1) {
                if (bicoinCounter >= 1) {
                    firstDayPurchase = currentDay;
                }
            }
        }        
        index++;                                    // i - 1
        // console.log(goldToMoneyExchange)
    }
    console.log(`Bought bitcoins: ${bicoinCounter}`)
    if (bicoinCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayPurchase}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([3124.15, 504.212, 2511.124])