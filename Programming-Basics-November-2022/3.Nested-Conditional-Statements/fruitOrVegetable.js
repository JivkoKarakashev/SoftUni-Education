function fruitOrVegetable(input){
    let name = input[0];

    // banana, apple, kiwi, cherry, lemon и grapes
    // tomato, cucumber, pepper и carrot

    switch(name){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}

fruitOrVegetable (["banana"])