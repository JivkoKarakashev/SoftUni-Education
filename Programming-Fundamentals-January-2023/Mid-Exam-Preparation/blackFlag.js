function blackFlag(inputArray){

    inputArray = inputArray.map(x => Number(x));
    let [days, gainPerDay, target] = [...inputArray];
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++){
        totalPlunder += gainPerDay;
        if (i % 3 === 0){
            totalPlunder += (gainPerDay * 0.5);
        }
        if (i % 5 === 0){
            totalPlunder -= (0.3 * totalPlunder);
        }
    }
    if (totalPlunder >= target){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        let percentageOfTarget = totalPlunder / target * 100;
        console.log(`Collected only ${percentageOfTarget.toFixed(2)}% of the plunder.`)
    }
}

blackFlag(["5",
"40",
"100"])
console.log('--------------------------')
blackFlag(["10",
"20",
"380"])