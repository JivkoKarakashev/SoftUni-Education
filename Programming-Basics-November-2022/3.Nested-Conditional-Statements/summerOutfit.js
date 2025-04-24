function summerOutfit(input){

    let temp = Number(input[0]);
    let dayPart = input[1];
    let outfit = 0;
    let shoes = 0;

    if (temp >= 10 && temp <= 18){
        switch(dayPart){
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon":
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break; 
        }
        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    }
    else if (temp > 18 && temp <=24){
        switch(dayPart){
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Morning":
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    }
    else if (temp >=25){
        switch(dayPart){
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    }
}

summerOutfit (["28",
"Evening"])



