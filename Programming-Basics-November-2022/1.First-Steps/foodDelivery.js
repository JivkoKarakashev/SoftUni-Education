function foodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegitable = Number(input[2]);
    let menuCost = chicken * 10.35 + fish * 12.40 + vegitable * 8.15;
    let dessert = menuCost * 20 / 100;
    let delivery = 2.50;
    let total = menuCost + dessert + delivery;
    console.log(total)
}

foodDelivery(["2", "4", "3"])