function makeADictionary(inputArray) {
    
    let dictionary = {};
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let currLineArr = inputArray[i].split('"');
        let term = currLineArr[1];
        let definition = currLineArr[3];
        dictionary[term] = definition;
    }
    // console.log(dictionary)        
    let orderedKeysArr = Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b));
        // console.log(orderedKeysArr)
        ////Alternative dynamic assign proeprty using reduce() method////
        // .reduce(
        //     (obj, key) => {
        //         obj[key] = dictionary[key];
        //         return obj;
        //     },
        //     {}
        // );
    // console.log(ordered)
    let orderedDictionary = {};
    for (currTerm of orderedKeysArr){
        orderedDictionary[currTerm] = dictionary[currTerm];
    }
    
    for (term of Object.keys(orderedDictionary)){
        console.log(`Term: ${term} => Definition: ${orderedDictionary[term]}`)
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
console.log('--------------------------------------------------------------------------------------------------------')
makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ])