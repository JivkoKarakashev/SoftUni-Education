function solution() {
    const ingredStorageObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    const recipesLibrObj = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
    return (str) => {
        let command, ingredient, recipe, quantity;
        if (str.includes('restock')) {
            [command, ingredient, quantity] = str.split(' ');
            ingredStorageObj[ingredient] += Number(quantity);
            return 'Success';
        } else if (str.includes('prepare')) {
            let hasEnoughIngredients = true;
            [command, recipe, quantity] = str.split(' ');
            for (let [ingred, value] of Object.entries(recipesLibrObj[recipe])) {
                if (ingredStorageObj[ingred] < (Number(quantity) * value)) {
                    hasEnoughIngredients = false;
                    return `Error: not enough ${ingred} in stock`;
                } else {
                    continue;
                }
            }
            if (hasEnoughIngredients) {
                for (let [ingred, value] of Object.entries(recipesLibrObj[recipe])) {
                    ingredStorageObj[ingred] -= (Number(quantity) * value);                    
                }
            }
           return ('Success');
        } else if (str == 'report') {
            command = str;
            let ingredStorageArr = Object.entries(ingredStorageObj);
            let reportArr = ingredStorageArr.map((ingr) => ingr[0] + "=" + ingr[1]);
            return reportArr.join(' ');
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));         // Success
console.log(manager("prepare lemonade 4"));         //Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));    // Success
console.log(manager("restock flavour 10"));         // Success
console.log(manager("prepare apple 1"));            // Success
console.log(manager("restock fat 10"));             // Success
console.log(manager("prepare burger 1"));           // Success
console.log(manager("report"));                     //protein=0 carbohydrate=4 fat=3 flavour=55
// console.log('----------------------------------------------------------------');
// let manager = solution();
// console.log(manager("prepare turkey 1"));               // Error: not enough protein in stock
// console.log(manager("restock protein 10"));             // Success
// console.log(manager("prepare turkey 1"));               // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10"));        // Success
// console.log(manager("prepare turkey 1"));               // Error: not enough fat in stock
// console.log(manager("restock fat 10"));                 // Success
// console.log(manager("prepare turkey 1"));               // Error: not enough flavour in stock
// console.log(manager("restock flavour 10"));             // Success
// console.log(manager("prepare turkey 1"));               // Success
// console.log(manager("report"));                         //protein=0 carbohydrate=0 fat=0 flavour=0