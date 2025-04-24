function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let bill = 0;

    // switch-case-switch method
    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": bill = quantity * 0.50; break;
                case "water": bill = quantity * 0.80; break;
                case "beer": bill = quantity * 1.20; break;
                case "sweets": bill = quantity * 1.45; break;
                case "peanuts": bill = quantity * 1.60; break;
            }
            break;

        case "Plovdiv":
            switch (product) {
                case "coffee": bill = quantity * 0.40; break;
                case "water": bill = quantity * 0.70; break;
                case "beer": bill = quantity * 1.15; break;
                case "sweets": bill = quantity * 1.30; break;
                case "peanuts": bill = quantity * 1.50; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": bill = quantity * 0.45; break;
                case "water": bill = quantity * 0.70; break;
                case "beer": bill = quantity * 1.10; break;
                case "sweets": bill = quantity * 1.35; break;
                case "peanuts": bill = quantity * 1.55; break;
            }
            break;

    }
    console.log(bill)

    //if-else if-else method
    if(town === "Sofia"){
        if(product === "coffee"){
            bill = quantity * 0.50; 
        }
        else if(product === "water"){
            bill = quantity * 0.80;
        }
        else if(product === "beer"){
            bill = quantity * 1.20;
        }
        else if(product === "sweets"){
            bill = quantity * 1.45; 
        }
        else{
            bill = quantity * 1.60;
        }
        console.log(bill);
    }
    else if(town ==="Plovdiv"){
        if(product === "coffee"){
            bill = quantity * 0.40; 
        }
        else if(product === "water"){
            bill = quantity * 0.70;
        }
        else if(product === "beer"){
            bill = quantity * 1.15;
        }
        else if(product === "sweets"){
            bill = quantity * 1.30; 
        }
        else{
            bill = quantity * 1.50;
        }
        console.log(bill);
    }
    else{
        if(product === "coffee"){
            bill = quantity * 0.45; 
        }
        else if(product === "water"){
            bill = quantity * 0.70;
        }
        else if(product === "beer"){
            bill = quantity * 1.10;
        }
        else if(product === "sweets"){
            bill = quantity * 1.35; 
        }
        else{
            bill = quantity * 1.55;
        }
        console.log(bill);
    }
}

smallShop (["coffee",
"Varna",
"2"])









