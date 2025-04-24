function fruitShop(input){

/*              working days
плод	banana	apple	orange	grapefruit	 kiwi	pineapple	grapes
цена	 2.50	1.20	0.85	1.45	     2.70	   5.50 	3.85
                weekend
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	    3.00	5.60	    4.20
*/

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let value = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        switch(fruit){
            case "banana": value = quantity * 2.5; break;
            case "apple": value = quantity * 1.2; break;
            case "orange": value = quantity * 0.85; break;
            case "grapefruit": value = quantity * 1.45; break;
            case "kiwi": value = quantity * 2.7; break;
            case "pineapple": value = quantity * 5.5; break;
            case "grapes": value = quantity * 3.85; break;
            default: console.log("error")
        }
        if(value > 0){
            console.log(value.toFixed(2))
        }
    }
    else if(day === "Saturday" || day ==="Sunday"){
        switch(fruit){
            case "banana": value = quantity * 2.7; break;
            case "apple": value = quantity * 1.25; break;
            case "orange": value = quantity * 0.90; break;
            case "grapefruit": value = quantity * 1.60; break;
            case "kiwi": value = quantity * 3; break;
            case "pineapple": value = quantity * 5.6; break;
            case "grapes": value = quantity * 4.2; break;
            default: console.log("error")
        }
        if(value > 0){
            console.log(value.toFixed(2))
        }
    }
    else{
        console.log("error")
    }
}

fruitShop (["pineapple",
"Monday",
"0.5"])








