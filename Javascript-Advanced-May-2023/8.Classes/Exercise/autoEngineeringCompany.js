function autoEngineeringCompany(inpuArray) {

    const resultCarsRegisterMap = new Map();

    for (const carLine of inpuArray) {
        let [brand, model, quantity] = carLine.split(' | ');
        quantity = Number(quantity);
        if (!resultCarsRegisterMap.has(brand)) {
            let newModelObj = {};
            resultCarsRegisterMap.set(brand, newModelObj);
            resultCarsRegisterMap.get(brand)[model] = quantity;
        } else {
            if (!resultCarsRegisterMap.get(brand).hasOwnProperty(model)) {
                resultCarsRegisterMap.get(brand)[model] = 0;
            }
            resultCarsRegisterMap.get(brand)[model] += quantity;
        }
    }
    const resultCarsRegisterArr = resultCarsRegisterMap.entries();
    // console.log(resultCarsRegisterArr);
    for (const brand of resultCarsRegisterArr) {
        console.log(brand[0]);
        for (let [model, qtty] of Object.entries(brand[1])) {
            console.log(`###${model} -> ${qtty}`);
        }
    }
}

autoEngineeringCompany(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ])