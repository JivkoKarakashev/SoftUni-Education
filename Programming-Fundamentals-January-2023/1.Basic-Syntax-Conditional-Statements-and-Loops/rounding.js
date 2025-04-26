function rounding(number, decimalPlaces){

    let parceToNumber = Number(number);

    if (decimalPlaces > 15){
        console.log(parseFloat(parceToNumber.toFixed(15)))
    } else if (decimalPlaces <= 15){
        console.log(parseFloat(parceToNumber.toFixed(decimalPlaces)))
    }
}

rounding(-10.0000000000000000,16)