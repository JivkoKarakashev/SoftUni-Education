function city(inputObj) {

    for (const key of Object.keys(inputObj)) {
        console.log(`${key} -> ${inputObj[key]}`)        
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
console.log('---------------------------')
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})