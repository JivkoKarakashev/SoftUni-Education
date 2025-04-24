function journey(input){
    
    let budget = Number(input[0]);
    let season = input[1];
    
    if (budget <= 100){
        let destination = "Bulgaria"
        if (season === "summer"){
            let type = "Camp";
            budget = budget * 30 / 100;
            console.log(`Somewhere in ${destination}`)
            console.log(`${type} - ${budget.toFixed(2)}`)
        }
        else{
            type = "Hotel";
            budget = budget * 70 /100;
            console.log(`Somewhere in ${destination}`)
            console.log(`${type} - ${budget.toFixed(2)}`)
        }
    }
    else if (budget > 100 && budget <= 1000){
        let destination = "Balkans"
        if (season === "summer"){
            let type = "Camp";
            budget = budget * 40 / 100;
            console.log(`Somewhere in ${destination}`)
            console.log(`${type} - ${budget.toFixed(2)}`)
        }
        else{
            type = "Hotel";
            budget = budget * 80 /100;
            console.log(`Somewhere in ${destination}`)
            console.log(`${type} - ${budget.toFixed(2)}`)
        }
    }
    else if (budget > 1000){
        destination = "Europe";
        type = "Hotel";
        budget = budget * 90 /100;
        console.log(`Somewhere in ${destination}`)
        console.log(`${type} - ${budget.toFixed(2)}`)
    }

}

journey (["1500", "summer"])