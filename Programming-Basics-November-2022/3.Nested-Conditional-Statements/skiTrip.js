function skiTrip(input){

    let days = Number(input[0]);
    let type = input[1];
    let rate = input[2];
    let nights = days -1;
    let cost = 0;

    if (type === "room for one person"){
        cost = nights * 18;
        if (rate === "positive"){
            cost += cost * 25 / 100;
        }
        else if (rate === "negative"){
            cost -= cost * 10 / 100;
        }
    }
    if (type === "apartment"){
        cost = nights * 25;
        if (days < 10){
            cost -= cost * 30 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
        else if (days >= 10 && days <= 15){
            cost -= cost * 35 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
        else if (days > 15){
            cost -= cost * 50 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
    }
    if (type === "president apartment"){
        cost = nights * 35;
        if (days < 10){
            cost -= cost * 10 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
        else if (days >= 10 && days <= 15){
            cost -= cost * 15 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
        else if (days > 15){
            cost -= cost * 20 / 100;
            if (rate === "positive"){
                cost = cost += cost * 25 / 100;
            }
            else if (rate === "negative"){
                cost -= cost * 10 / 100;
            }
        }
    }
    console.log(cost.toFixed(2))
}

skiTrip (["30",
"president apartment",
"negative"])


