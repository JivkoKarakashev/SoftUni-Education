function theatrePromotions(day, age) {

    let ticketPrice = 0;

    switch (day) {
        case "Weekday":
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (18 < age && age <= 64) {
                ticketPrice = 18;
            } else if (64 < age && age <= 122) {
                ticketPrice = 12;
            }
            break;
        case "Weekend":
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            } else if (18 < age && age <= 64) {
                ticketPrice = 20;
            } else if (64 < age && age <= 122) {
                ticketPrice = 15;
            }
            break;
        case "Holiday":
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            } else if (18 < age && age <= 64) {
                ticketPrice = 12;
            } else if (64 < age && age <= 122) {
                ticketPrice = 10;
            }
            break;
        default: ; break;
    }
    if (ticketPrice > 0){
        console.log(`${ticketPrice}$`)
    }else{
        console.log("Error!")
    }
}

theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)