function needForSpeedIII(inputArray) {

    const drive = (carsLstMap, car, distance, fuel) => {
        distance = Number(distance);
        fuel = Number(fuel);
        if (carsLstMap.get(car)[2] < fuel) {
            console.log('Not enough fuel to make that ride');
            return;
        }
        carsLstMap.get(car)[1] += distance;
        carsLstMap.get(car)[2] -= fuel;
        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        if (carsLstMap.get(car)[1] >= 100000) {
            carsLstMap.delete(car);
            console.log(`Time to sell the ${car}!`);
        }
    }
    const refuel = (carsLstMap, car, fuel) => {
        fuel = Number(fuel);
        let loadedFuel = Math.min(75 - carsLstMap.get(car)[2], fuel);
        carsLstMap.get(car)[2] += loadedFuel;
        console.log(`${car} refueled with ${loadedFuel} liters`);
    }
    const revert = (carsLstMap, car, mileageRevert) => {
        mileageRevert = Number(mileageRevert);
        let mileageReverted = Math.min(carsLstMap.get(car)[1] - 10000, mileageRevert);
        carsLstMap.get(car)[1] -= mileageReverted;
        if (mileageReverted < mileageRevert) {
            return;
        }
        console.log(`${car} mileage decreased by ${mileageReverted} kilometers`);
    }

    const carsCount = Number(inputArray.shift());
    const carsListMap = new Map;

    for (let i = 0; i < carsCount; i++) {
        let [car, mileage, fuel] = inputArray.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carsListMap.set(car, []);
        carsListMap.get(car).push(car, mileage, fuel);
    }
    // console.log(carsListMap);
    let currLine = inputArray.shift();

    while (currLine !== 'Stop') {
        let command, car, distance, fuel, mileageRevert;
        if (currLine.includes('Drive')) {
            [command, car, distance, fuel] = currLine.split(' : ');
        } else if (currLine.includes('Refuel')) {
            [command, car, fuel] = currLine.split(' : ');
        } else if (currLine.includes('Revert')) {
            [command, car, mileageRevert] = currLine.split(' : ');
        }

        switch (command) {
            case 'Drive': drive(carsListMap, car, distance, fuel); break;
            case 'Refuel': refuel(carsListMap, car, fuel); break;
            case 'Revert': revert(carsListMap, car, mileageRevert); break;
        }

        currLine = inputArray.shift();
    }
    // console.log(carsListMap);
    const carsListArr = carsListMap.entries();
    // console.log(carsListArr);
    for (let car of carsListArr) {
        console.log(`${car[1][0]} -> Mileage: ${car[1][1]} kms, Fuel in the tank: ${car[1][2]} lt.`);
    }
}

needForSpeedIII(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ])
console.log('------------------------------------------------');
needForSpeedIII(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ])