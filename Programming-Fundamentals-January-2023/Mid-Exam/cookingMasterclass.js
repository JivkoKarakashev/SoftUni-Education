function cookingMasterclass(inputArray){

    // 1 student = 1flour + 10 eggs + 1 apron
    inputArray = inputArray.map(x => Number(x));    
    let [budget, students, flourPrice, eggPrice, apronPrice] = [...inputArray];

    flourDiscount = Math.trunc(students / 5);
    flourCosts = (students - flourDiscount) * flourPrice;
    eggsCosts = students * 10 * eggPrice;
    apronCosts = Math.ceil(students * 1.2) * apronPrice;    
    totalCosts = (flourCosts + eggsCosts + apronCosts);

    if (totalCosts <= budget){
        console.log(`Items purchased for ${totalCosts.toFixed(2)}$.`);
    }
    else {
        let neededMoney = totalCosts - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
    // console.log(totalCosts)
}

cookingMasterclass ([50,
    2,
    1.0,
    0.10,
    10.0])
console.log('-----------------------')  
cookingMasterclass ([100,
    25,
    4.0,
    1.0,
    6.0])       
console.log('-----------------------')  
cookingMasterclass ([946, 
    20, 
    12.05, 
    0.42, 
    27.89])           