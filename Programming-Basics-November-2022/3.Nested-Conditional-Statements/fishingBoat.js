function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let shipRent = 0;
    let balance = 0;

    switch (season) {
        case "Spring":
            shipRent = 3000;
            if (fishermen <= 6) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 10 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen > 7 && fishermen <= 11) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 20 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen >= 12) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 30 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 25 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            break;
        case "Summer":
            shipRent = 4200;
            if (fishermen <= 6) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 10 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen > 7 && fishermen <= 11) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 20 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen >= 12) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 30 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 25 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            break;
        case "Winter":
            shipRent = 2600;
            if (fishermen <= 6) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 10 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen > 7 && fishermen <= 11) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 20 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 15 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            else if (fishermen >= 12) {
                if (fishermen % 2 === 0) {
                    shipRent -= shipRent * 30 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
                else {
                    shipRent -= shipRent * 25 / 100;
                    // console.log(`Shiprent is: ${shipRent}`)
                    if (budget >= shipRent) {
                        balance = budget - shipRent;
                        console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                    }
                    else {
                        balance = shipRent - budget;
                        console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                    }
                }
            }
            break;
        case "Autumn":
            shipRent = 4200;
            if (fishermen <= 6) {

                shipRent -= shipRent * 10 / 100;
                // console.log(`Shiprent is: ${shipRent}`)
                if (budget >= shipRent) {
                    balance = budget - shipRent;
                    console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = shipRent - budget;
                    console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                }
            }
            else if (fishermen > 7 && fishermen <= 11) {

                shipRent -= shipRent * 15 / 100;
                // console.log(`Shiprent is: ${shipRent}`)
                if (budget >= shipRent) {
                    balance = budget - shipRent;
                    console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = shipRent - budget;
                    console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                }
            }
            else if (fishermen >= 12) {

                shipRent -= shipRent * 25 / 100;
                // console.log(`Shiprent is: ${shipRent}`)
                if (budget >= shipRent) {
                    balance = budget - shipRent;
                    console.log(`Yes! You have ${balance.toFixed(2)} leva left.`)
                }
                else {
                    balance = shipRent - budget;
                    console.log(`Not enough money! You need ${balance.toFixed(2)} leva.`)
                }
            }
            break;

    }
}

fishingBoat (["2401",
"Spring",
"10"])


