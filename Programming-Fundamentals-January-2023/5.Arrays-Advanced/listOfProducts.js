function listOfProducts(inputArray){

    // let sortedArray = inputArray.sort((a, b) => a.localeCompare(b))
    let sortedArray = inputArray.sort()
    .map((currEl, index) => (currEl = `${index + 1}.${currEl}`));
    console.log(sortedArray.join('\n'))
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
console.log('------------')
listOfProducts(['Watermelon', 'Banana', 'Apples'])