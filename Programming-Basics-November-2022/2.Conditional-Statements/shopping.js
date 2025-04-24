function shopping(input){
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let gpuValue = gpu * 250;
    let totalBill = gpuValue + cpu*gpuValue*35/100 + ram*gpuValue*10/100; 
    // console.log(`TotalBill w/out discount: ${totalBill.toFixed(2)} leva`)

    if( gpu > cpu){
        totalBill -= 15/100*totalBill;
        // console.log(`TotalBill w/th discount: ${totalBill.toFixed(2)} leva`)

        if(totalBill <= budget){
            let balance = budget - totalBill;
            console.log(`You have ${balance.toFixed(2)} leva left!`)
        }
        else{
            balance = totalBill - budget ;
            console.log(`Not enough money! You need ${balance.toFixed(2)} leva more!`)
        }

    }
    else{
        if(totalBill <= budget){
            let balance = budget - totalBill;
            console.log(`You have ${balance.toFixed(2)} leva left!`)
        }
        else{
            balance = totalBill - budget ;
            console.log(`Not enough money! You need ${balance.toFixed(2)} leva more!`)
        }     
    }

}

shopping (["920.45",
"3",
"1",
"1"])



