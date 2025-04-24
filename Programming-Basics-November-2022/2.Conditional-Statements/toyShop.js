function toyShop(input){
    let vacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]) ;
    let minions = Number(input[4]);
    let toyTrucks = Number(input[5]);
    let totalToys = puzzles + dolls + teddyBears + minions + toyTrucks;
    let bill = puzzles * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.2 + toyTrucks * 2;
    let shopRent = 0;
    let netIncome = 0;
    let residualAmount = 0;

    // console.log(`TotalToys: ${totalToys}`)
    // console.log(`Bill w/out discount: ${bill}`)

    if(totalToys >= 50){
        bill -= bill * 25 / 100;
        shopRent = bill * 10 / 100;
        netIncome = bill - shopRent;
        if( netIncome - vacation >= 0){
            residualAmount = netIncome - vacation;
            // console.log(`Bill w/t discount: ${bill}`)
            // console.log(`ShopRent: ${shopRent}`)
            // console.log(`NettIncome: ${netIncome}`)
            console.log(`Yes! ${residualAmount.toFixed(2)} lv left.`)
        }
        else{
            residualAmount = vacation - netIncome;
            // console.log(`Bill w/t discount: ${bill}`)
            // console.log(`ShopRent: ${shopRent}`)
            // console.log(`NettIncome: ${netIncome}`)
            console.log(`Not enough money! ${residualAmount.toFixed(2)} lv needed.`)
        }    
    }
    else{
        shopRent = bill * 10 / 100;
        netIncome = bill - shopRent;
        if( netIncome - vacation >= 0){
            residualAmount = netIncome - vacation;
            // console.log(`ShopRent: ${shopRent}`)
            // console.log(`NettIncome: ${netIncome}`)
            console.log(`Yes! ${residualAmount.toFixed(2)} lv left.`)
        }
        else{
            residualAmount = vacation - netIncome;
            // console.log(`ShopRent: ${shopRent}`)
            // console.log(`NettIncome: ${netIncome}`)
            console.log(`Not enough money! ${residualAmount.toFixed(2)} lv needed.`)
        }
    }
}

toyShop (["320",
"8",
"2",
"5",
"5",
"1"])
