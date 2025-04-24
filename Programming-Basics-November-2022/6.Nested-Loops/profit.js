function profit(input){

    let oneLevCoins = Number(input[0]);
    let twoLevaCoins = Number(input[1]);
    let fiveLevaCoins = Number(input[2]);
    let withdrawAmount = Number(input[3]);

    for (let oneLev = 0; oneLev <= oneLevCoins; oneLev++ ){
        for (let twoLeva = 0; twoLeva <= twoLevaCoins; twoLeva++){
            for (let fiveLeva = 0; fiveLeva <= fiveLevaCoins; fiveLeva++){
                let sum = oneLev * 1 + twoLeva * 2 + fiveLeva * 5;
                if (sum === withdrawAmount){
                    console.log(`${oneLev} * 1 lv. + ${twoLeva} * 2 lv. + ${fiveLeva} * 5 lv. = ${withdrawAmount} lv.`)
                }
            }
        }
    }
}

profit (["5",
"3",
"1",
"7"])
