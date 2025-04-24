function newHouse(input) {

    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let cost = 0;
    let balance = 0;

    switch (flower) {
        case "Roses":
            price = 5;
            if (quantity <= 80) {
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            else {
                price -= price * 10 / 100;
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            break;
        case "Dahlias":
            price = 3.8;
            if (quantity <= 90) {
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            else {
                price -= price * 15 / 100;
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            break;
        case "Tulips":
            price = 2.8;
            if (quantity <= 80) {
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            else {
                price -= price * 15 / 100;
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            break;
        case "Narcissus":
            price = 3;
            if (quantity >= 120) {
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            else {
                price += price * 15 / 100;
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            break;
        case "Gladiolus":
            price = 2.5;
            if (quantity >= 80) {
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            else {
                price += price * 20 / 100;
                cost = quantity * price;
                if (budget >= cost) {
                    balance = budget - cost;
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = cost - budget;
                    console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
                }
            }
            break;
    }

}

newHouse (["Narcissus",
"119",
"360"])

