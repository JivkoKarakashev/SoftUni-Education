function vacation(groupCount, groupType, day){

    let price = 0;
    let totalPrice = 0;
    let discount = 0;

    switch (groupType){
        case "Students": switch (day){
            case "Friday": price = 8.45; break;
            case "Saturday": price = 9.80; break;
            case "Sunday": price = 10.46; break;
            default: ; break;
        } break;
        case "Business": switch (day){
            case "Friday": price = 10.90; break;
            case "Saturday": price = 15.60; break;
            case "Sunday": price = 16; break;
            default: ; break;
        } break;
        case "Regular": switch (day){
            case "Friday": price = 15; break;
            case "Saturday": price = 20; break;
            case "Sunday": price = 22.50; break;
            default: ; break;
        } break;
        default: ; break;
    }

    totalPrice = groupCount * price;

    if (groupType === "Students" && groupCount >= 30){
        discount = totalPrice * 15 / 100;
        // totalPrice -= discount;
    } else if (groupType === "Business" && groupCount >= 100){
        discount = 10 * price;
        // totalPrice -= discount;
    } else if (groupType === "Regular" && 10 <= groupCount && groupCount <= 20){
        discount = totalPrice * 5 / 100;
    }
    console.log(`Total price: ${(totalPrice - discount).toFixed(2)}`)
}

vacation(40,
    "Regular",
    "Saturday")