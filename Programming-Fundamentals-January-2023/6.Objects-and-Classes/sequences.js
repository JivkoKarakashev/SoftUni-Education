function sequences(inputArrs) {
    inputArrs = inputArrs.map(el => JSON.parse(el));
    inputArrs.forEach(el => el.sort((a, b) => b - a));
    let outputArrs = [];
    for (let i = 0; i < inputArrs.length; i++) {
        let currentArray = inputArrs[i];
        let isUnique = true;
        for (let j = 0; j < outputArrs.length; j++) {
            let nextArray = outputArrs[j];
            if (JSON.stringify(nextArray) === JSON.stringify(currentArray)) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            outputArrs.push(currentArray);
        }
    }
    outputArrs.sort((a, b) => a.length - b.length);
    outputArrs.forEach(el => console.log(`[${el.join(', ')}]`));
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])
console.log('--------------------------')
sequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"])