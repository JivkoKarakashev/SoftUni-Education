function happyCatParking(input){

    let days = Number(input[0]);
    let hours = Number(input[1]);    
    let totalAmount = 0;
    
    for (let d = 1; d <= days; d++){
        let dayAmount = 0;
        for (let h = 1; h <= hours; h++){
            if (d % 2 === 0 && h % 2 !== 0){
                dayAmount += 2.5;
            }
            else if (d % 2 !== 0 && h % 2 === 0){
                dayAmount += 1.25
            }
            else{
                dayAmount += 1;
            }
        }
        console.log(`Day: ${d} - ${dayAmount.toFixed(2)} leva`)
        totalAmount += dayAmount;
    }
    console.log(`Total: ${totalAmount.toFixed(2)} leva`)
}

happyCatParking (["5",
"2"])
