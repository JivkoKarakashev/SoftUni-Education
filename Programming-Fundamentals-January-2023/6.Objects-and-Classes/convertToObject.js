function convertToObject(inputStr){

    let inputStrToObjectCoversion = JSON.parse(inputStr);
    
    for (const key of Object.keys(inputStrToObjectCoversion)) {
        console.log(`${key}: ${inputStrToObjectCoversion[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
console.log('---------------------------')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')