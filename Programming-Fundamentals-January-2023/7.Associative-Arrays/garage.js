function garage(inputArray) {

    const garagesListObj = {};

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let [garage, carSpecs] = inputArray[i].split(' - ');
        garage = Number(garage);
        let carSpecsArr = carSpecs.split(', ');
        if (!garagesListObj.hasOwnProperty(garage)) {
            garagesListObj[garage] = [];
        }
        garagesListObj[garage].push(carSpecsArr);
    }
    // console.log(garagesListObj);
    for (let currGarage in garagesListObj) {
        console.log(`Garage № ${currGarage}`);
        for (let currCar of garagesListObj[currGarage]) {
            let currCarrSpecsArr = [];
            for (let currSpec of currCar) {
                let currSpecPairArr = currSpec.split(': ');        
                currCarrSpecsArr = currCarrSpecsArr.concat([currSpecPairArr.join(' - ')]);
            }
            console.log(`--- ${currCarrSpecsArr.join(', ')}`);
        }
    }
}

garage(
    [
        '1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ])
console.log('--------------------------------');
garage(
    ['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol'
    ])