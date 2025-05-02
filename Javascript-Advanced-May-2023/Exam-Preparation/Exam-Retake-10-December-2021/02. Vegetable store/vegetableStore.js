function solve() {
    class VegetableStore {
        // #totalPrice = 0;
        #sortFunc = (prodsArray) => {
            const sortedProds = prodsArray.sort((prodAobj, prodBObj) => prodAobj.price - prodBObj.price);
            return sortedProds;
        }
        constructor(owner, location) {
            this.owner = owner;
            this.location = location;
            this.availableProducts = [];
        }
        loadingVegetables(vegetables) {
            const loadedProds = [];
            for (let currProdObj of vegetables) {
                let [type, quantity, price] = currProdObj.split(' ');
                quantity = Number(quantity);
                price = Number(price);
                let prodIdx = this.availableProducts.findIndex((prodObj) => prodObj['type'] === type);
                if (prodIdx !== -1) {
                    this.availableProducts[prodIdx]['quantity'] += quantity;
                    if (price > this.availableProducts[prodIdx]['price']) {
                        this.availableProducts[prodIdx]['price'] = price;
                    }
                } else if (prodIdx === -1) {
                    this.availableProducts.push({ 'type': type, 'quantity': quantity, 'price': price });
                    loadedProds.push(type);
                }
            }
            const uniqueLoadedProds = [...new Set(loadedProds)];
            return `Successfully added ${uniqueLoadedProds.join(', ')}`;
        }
        buyingVegetables(selectedProducts) {
            let totalPrice = 0;
            for (let currSelectProd of selectedProducts) {
                let [type, quantity] = currSelectProd.split(' ');
                quantity = Number(quantity);
                let prodIdx = this.availableProducts.findIndex((prodObj) => prodObj['type'] === type);
                if (prodIdx === -1) {
                    throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
                if (quantity > this.availableProducts[prodIdx]['quantity']) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
                let currProdPrice = quantity * this.availableProducts[prodIdx].price;
                this.availableProducts[prodIdx]['quantity'] -= quantity;
                totalPrice += currProdPrice;
            }
            return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
        }
        rottingVegetable(type, quantity) {
            let prodIdx = this.availableProducts.findIndex((prodObj) => prodObj['type'] === type);
            if (prodIdx === -1) {
                throw new Error(`${type} is not available in the store.`);
            }
            if (quantity > this.availableProducts[prodIdx]['quantity']) {
                this.availableProducts[prodIdx]['quantity'] = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                this.availableProducts[prodIdx]['quantity'] -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        }
        revision() {
            const sortedProds = this.#sortFunc(this.availableProducts);
            const outputProdsArray = [];
            for (let currProdObj of sortedProds) {
                outputProdsArray.push(`${currProdObj.type}-${currProdObj.quantity}-$${currProdObj.price}`);
            }
            return `Available vegetables:\n${outputProdsArray.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
        }
    }
    // let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
    // console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
    // console.log('--------------------------------------------------');
    // let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
    // console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
    // console.log(vegStore.buyingVegetables(["Okra 1"]));
    // console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
    // console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
    // console.log('--------------------------------------------------');
    // let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
    // console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
    // console.log(vegStore.rottingVegetable("Okra", 1));
    // console.log(vegStore.rottingVegetable("Okra", 2.5));
    // console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
    console.log('--------------------------------------------------');
    let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
    console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
    console.log(vegStore.rottingVegetable("Okra", 1));
    console.log(vegStore.rottingVegetable("Okra", 2.5));
    console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
    console.log(vegStore.revision());
}

solve()