function yardGreening(input){
    let area = Number(input[0]);
    let cost = area * 7.61;
    let discount = 0.18 * cost;
    let finalPrice = cost - discount;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])