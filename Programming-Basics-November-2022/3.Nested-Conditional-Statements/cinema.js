function cinema(input){

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (type === "Premiere"){
        income = rows * columns * 12;
    }
    else if( type === "Normal"){
        income = rows * columns * 7.5;
    }
    else{
        income = rows * columns *5;
    }
    console.log(`${income.toFixed(2)} leva`)

}

cinema (["Discount",
"12",
"30"])


