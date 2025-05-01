function calorieObject(inputArray) {

    const resultObject = {};
    const propertiesArray = [];
    const inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i+=2) {
        propertiesArray.push([inputArray[i], inputArray[i + 1]]);
    }
    
    for (let [food, calories] of propertiesArray) {
        calories = Number(calories);
        resultObject[food] = calories;
    }
    console.log(resultObject);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log('-----------------------------------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])