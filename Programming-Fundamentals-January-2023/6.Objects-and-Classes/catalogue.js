function catalogue(inputArray) {

    const catalaogue = {};
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let currLineArr = inputArray[i].split(' : ');
        let [prodName, prodPrice] = [...currLineArr];
        let currInitChar = prodName[0];
        // console.log(currInitChar)
        let newProduct = new Product(prodName, prodPrice);
        if (catalaogue.hasOwnProperty(currInitChar)) {
            catalaogue[currInitChar].push(newProduct);
        } else {
            catalaogue[currInitChar] = [];
            catalaogue[currInitChar].push(newProduct);
        }
    }

    let orderedKeysArr = Object.keys(catalaogue)
        .sort((a, b) => a.localeCompare(b));

    for (const key in catalaogue) {        
        catalaogue[key].sort((a, b) => a.name.localeCompare(b.name));        
    }    
    const orderedCatalogue = {};
    orderedKeysArr.forEach(element => {
        orderedCatalogue[element] = catalaogue[element]
    });
    // console.log(orderedCatalogue)

    for (const key in orderedCatalogue) {
        console.log(key)
        // console.log(catalaogue[key])
        orderedCatalogue[key].forEach(element => {
            console.log(`  ${element.name}: ${element.price}`)
        });
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
console.log('------------------------')
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ])