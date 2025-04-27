function classStorage() {

    class Storage {
        constructor(capacity) {
            this.capacity = Number(capacity);
        }

        addProduct = (product) => {
            let currProperty = Object.values(product)[0];
            storage[currProperty] = product;

            let productsArray = Object.values(storage).slice(3);
            let productsArrayLength = productsArray.length;
            let totalCost = 0;
            // console.log(productsArray)
            for (let currProd of productsArray) {
                // console.log(currProd)
                // console.log(typeof currProd);
                let currProdType = typeof (currProd);
                if (currProdType !== 'object') {
                    continue;
                }

                let { price, quantity, ...others } = currProd;
                price = Number(price);
                quantity = Number(quantity);
                let cost = price * quantity;
                totalCost += cost;
            }
            storage['totalCost'] = totalCost;
            // console.log(totalCost);            
        }
        getProducts = () => {
            let productsArray = Object.keys(storage).slice(3);
            let productsArrayLength = productsArray.length;
            let stringifyProds = '';
            for (let i = 0; i < productsArrayLength; i++) {
                let currProd = productsArray[i];
                if (currProd === 'totalCost') {
                    continue;
                }
                if (i === productsArrayLength - 1) {
                    stringifyProds += (`${JSON.stringify(storage[currProd])}`)
                } else {
                    stringifyProds += (`${JSON.stringify(storage[currProd])}\n`);
                }
            }
            return stringifyProds;
        }
    }

    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

    // let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
    // let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
    // let storage = new Storage(30);
    // storage.addProduct(productOne);
    // storage.addProduct(productTwo);
    // console.log(storage.totalCost);


}

classStorage()