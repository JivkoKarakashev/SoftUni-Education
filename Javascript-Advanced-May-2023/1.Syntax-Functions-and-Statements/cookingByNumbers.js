function cookingByNumbers() {

    let argsArr = Array.from(arguments);
    let initialNum = Number(argsArr.shift());
    const argsArrLength = argsArr.length;

    for (let i = 0; i < argsArrLength; i++) {
        let operation = argsArr[i];
        switch (operation) {
            case 'chop': initialNum /= 2; console.log(initialNum); break;
            case 'dice': initialNum = Math.sqrt(initialNum); console.log(initialNum); break;
            case 'spice': initialNum += 1; console.log(initialNum); break;
            case 'bake': initialNum *= 3; console.log(initialNum); break;
            case 'fillet': initialNum = initialNum * 0.8; console.log(initialNum); break;
            default: ; break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('---');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')