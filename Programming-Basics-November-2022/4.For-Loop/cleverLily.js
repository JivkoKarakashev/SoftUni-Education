function cleverLily(input){

    let age = Number(input[0]);
    let washMachPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysTotal = 0;
    let money = 0;
    let count = 0;
    let d = 10;
    let savedMoney = 0;
    let balance = 0;

    for (let i = 1; i <= age; i++){

        if (i % 2 !== 0){
            toysTotal += toyPrice;            
        }
        else {
            count++
            money += count * d;
        }        
    }
    savedMoney = toysTotal + money - count;
    if (savedMoney >= washMachPrice){
        balance = savedMoney - washMachPrice;
        console.log(`Yes! ${balance.toFixed(2)}`)
    }
    else{
        balance = washMachPrice - savedMoney;
        console.log(`No! ${balance.toFixed(2)}`)
    }

    // console.log(toysTotal)
    // console.log(count)
    // console.log(money)
    //console.log(savedMoney)

}

cleverLily (["21",
"573",
"3"])
