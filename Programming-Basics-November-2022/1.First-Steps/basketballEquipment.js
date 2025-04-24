function basketballEquipment(input){
    let price = Number(input[0]);
    let shoes = price - price * 40 / 100;
    let equipment = shoes - shoes * 20 / 100;
    let ball = equipment / 4;
    let accessories = ball / 5;
    let total = price + shoes + equipment + ball + accessories;
    console.log(total.toFixed(2))
}

basketballEquipment(["365"])