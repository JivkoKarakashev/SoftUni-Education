function integerAndFloat( firstNum, secondNum, thirdNum){

    let sum = firstNum + secondNum + thirdNum;
    // let sumType = "";

    // if (Number.isInteger(sum)){
    //     sumType = "Integer";
    // } else{
    //     sumType = "Float";
    // }

    let sumType = Number.isInteger(sum)
        ? "Integer"
        : "Float";

    console.log(`${sum} - ${sumType}`)
}

integerAndFloat(100, 200, 303)