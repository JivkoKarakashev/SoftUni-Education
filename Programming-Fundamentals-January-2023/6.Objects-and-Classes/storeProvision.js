function storeProvision(stockArray, deliveryArray) {

    let stockArrayOfObjs = [];

    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
        print = () => console.log(`${this.name} -> ${this.quantity}`)
    }

    let stockArrayLemgth = stockArray.length;
    let deliveryArrayLength = deliveryArray.length;
    for (let i = 0; i < stockArrayLemgth; i += 2) {
        let prodName = stockArray[i];
        let prodQuantity = Number(stockArray[i + 1]);
        let newProductObj = new Product(prodName, prodQuantity);
        stockArrayOfObjs.push(newProductObj);
    }

    for (let i = 0; i < deliveryArrayLength; i += 2) {
        let prodName = deliveryArray[i];
        let prodQuantity = Number(deliveryArray[i + 1]);
        let isInStock = false;
        for (let currProductInStock of stockArrayOfObjs) {
            if (currProductInStock.name === prodName) {
                isInStock = true;
                currProductInStock.quantity += prodQuantity;
                break;
            }
            // console.log(key)
            // console.log(currProductInStock[key])
        }
        if (!isInStock) {
            let newProductObj = new Product(prodName, prodQuantity);
            stockArrayOfObjs.push(newProductObj);
        }
    }
    for (let currProductInStock of stockArrayOfObjs) {
        currProductInStock.print();
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
console.log('---------------')
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])