function carFactory(orderObject) {

    const powerPartsObj = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    };

    let engineObj = {};
    if (orderObject.power <= 90) {
        engineObj = powerPartsObj["Small engine"];
    } else if (orderObject.power <= 120) {
        engineObj = powerPartsObj["Normal engine"];
    } else if (orderObject.power <= 200) {
        engineObj = powerPartsObj["Monster engine"];
    }

    const carriageObj = {};
    carriageObj.type = orderObject.carriage;
    carriageObj.color = orderObject.color;


    let wheelSize = orderObject.wheelsize;
    if (wheelSize % 2 === 0) {
        wheelSize--;
    }
    const wheelsArr = Array(4).fill(wheelSize);


    const resultCarObj = {};
    resultCarObj.model = orderObject.model;
    resultCarObj.engine = engineObj;
    resultCarObj.carriage = carriageObj;
    resultCarObj.wheels = wheelsArr;

    return resultCarObj;
}


console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }));
console.log('--------------------------');
console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }));