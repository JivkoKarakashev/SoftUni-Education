function petShop(input){
    let dogFoodPkgs = Number(input[0]);
    let catFoodPkgs = Number(input[1]);
    let dogFoodCost = dogFoodPkgs * 2.5;
    let catFoodCost = catFoodPkgs * 4;
    let foodCost = dogFoodCost + catFoodCost;
    console.log(foodCost + " lv.")
    
}

petShop(["5", "4"]);