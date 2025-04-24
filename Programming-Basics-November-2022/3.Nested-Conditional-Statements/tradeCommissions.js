function tradeCommissions(input) {
    let town = input[0];
    let tradeVol = Number(input[1]);
    let comission = 0;

    if (tradeVol >= 0 && tradeVol <= 500) {
        switch (town){
            case "Sofia": comission = tradeVol * 5 / 100; break;
            case "Varna": comission = tradeVol * 4.5 / 100; break;
            case "Plovdiv": comission = tradeVol * 5.5 / 100; break;
            default: console.log("error")            
        }
        if (comission > 0){
            console.log(comission.toFixed(2))
        }
    }
    else if (tradeVol > 500 && tradeVol <= 1000){
        switch (town){
            case "Sofia": comission = tradeVol * 7 / 100; break;
            case "Varna": comission = tradeVol * 7.5 / 100; break;
            case "Plovdiv": comission = tradeVol * 8 / 100; break;
            default: console.log("error")
        }
        if (comission > 0){
            console.log(comission.toFixed(2))
        }
    }
    else if (tradeVol > 1000 && tradeVol <= 10000){
        switch(town){
            case "Sofia": comission = tradeVol * 8 / 100; break;
            case "Varna": comission = tradeVol * 10 / 100; break;
            case "Plovdiv": comission = tradeVol * 12 / 100; break;
            default: console.log("error")
        }
        if (comission > 0){
            console.log(comission.toFixed(2))
        }
    }
    else if (tradeVol > 10000){
        switch(town){
            case "Sofia": comission = tradeVol * 12 / 100; break;
            case "Varna": comission = tradeVol * 13 / 100; break;
            case "Plovdiv": comission = tradeVol * 14.5 / 100; break;
            default: console.log("error")
        }
        if (comission > 0){
            console.log(comission.toFixed(2))
        }
    }
    else{
        console.log("error")
    }

}

tradeCommissions (["Kaspichan",
"-50"])



