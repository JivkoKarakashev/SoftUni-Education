function godzillaVsKong(input) {
    let budget = Number(input[0])
    let extraPersons = Number(input[1]);
    let clothesPerson = Number(input[2]);
    let decor = budget * 10 / 100;
    let expenses = 0;

    // console.log(`Decor price: ${decor}`)
    if (extraPersons > 150) {
        clothesPerson -= clothesPerson * 10 / 100;
        expenses = decor + extraPersons * clothesPerson;
        // console.log(`ClothesPerPerson w/th discount: ${clothesPerson}`)
        // console.log(`Expenses: ${expenses}`)
    
        if (expenses > budget) {
            let deficit = expenses - budget;
            console.log("Not enough money!")
            console.log(`Wingard needs ${deficit.toFixed(2)} leva more.`)
        }
        else{
            deficit = budget - expenses;
            console.log("Action!")
            console.log(`Wingard starts filming with ${deficit.toFixed(2)} leva left.`)
        }

    }
    else{
        expenses = decor + extraPersons * clothesPerson;
        // console.log(`ClothesPerPerson w/out discount: ${clothesPerson}`)
        // console.log(`Expenses: ${expenses}`)

        if(expenses > budget){
            let deficit = expenses - budget;
            console.log("Not enough money!")
            console.log(`Wingard needs ${deficit.toFixed(2)} leva more.`)
        }
        else{
            deficit = budget - expenses;
            console.log("Action!")
            console.log(`Wingard starts filming with ${deficit.toFixed(2)} leva left.`)
        }
    }

}

godzillaVsKong(["20000",
"120",
"55.5"])







