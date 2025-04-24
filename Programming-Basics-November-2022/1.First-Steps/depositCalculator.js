function depositCalculator(input){
    let depValue = Number(input[0]);
    let depTerm = Number(input[1] / 100);
    let annIntRate = Number(input[2]);
    let depIntAmount = depValue + depTerm * ((depValue * annIntRate) / 12);
    console.log(depIntAmount)
}

depositCalculator(["200" , "3", "5.7"])