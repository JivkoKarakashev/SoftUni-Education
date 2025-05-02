function solve() {
    class OnlineShop {
        constructor(warehouseSpace) {
            this.warehouseSpace = warehouseSpace;
            this.products = [];
            this.sales = [];
        }
        loadingStore(product, quantity, spaceRequired) {
            if (this.warehouseSpace < spaceRequired) {
                throw new Error('Not enough space in the warehouse.');
            }
            this.products.push({ product, quantity });
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        }
        quantityCheck(product, minimalQuantity) {
            const prodObjIdx = this.products.findIndex((prodObj) => prodObj['product'] === product);
            if (prodObjIdx === -1) {
                throw new Error(`There is no ${product} in the warehouse.`);
            }
            if (minimalQuantity <= 0) {
                throw new Error('The quantity cannot be zero or negative.');
            }
            if (minimalQuantity <= this.products[prodObjIdx].quantity) {
                return `You have enough from product ${product}.`
            } else {
                const difference = minimalQuantity - this.products[prodObjIdx].quantity;
                this.products[prodObjIdx].quantity = minimalQuantity;
                return `You added ${difference} more from the ${product} products.`;
            }
        }
        sellProduct(product) {
            const prodObjIdx = this.products.findIndex((prodObj) => prodObj['product'] === product);
            if (prodObjIdx === -1) {
                throw new Error(`There is no ${product} in the warehouse.`);
            }
            this.products[prodObjIdx].quantity--;
            this.sales.push({ product, quantity: 1 });
            return `The ${product} has been successfully sold.`
        }
        revision() {
            if (this.sales.length === 0) {
                throw new Error('There are no sales today!');
            } else {
                const outputProductsLeftArray = [];
                const salesCount = this.sales.length;
                for (const prodObj of this.products) {
                    outputProductsLeftArray.push(`${prodObj.product}-${prodObj.quantity} more left`);
                }
                return `You sold ${salesCount} products today!\nProducts in the warehouse:\n${outputProductsLeftArray.join('\n')}`;
            }
        }
    }
    // const myOnlineShop = new OnlineShop(500)
    // console.log(myOnlineShop.loadingStore('headphones', 10, 200));
    // console.log(myOnlineShop.loadingStore('laptop', 5, 200));
    // console.log(myOnlineShop.loadingStore('TV', 40, 500));
    // console.log('------------------------------------------');
    // const myOnlineShop = new OnlineShop(500)
    // console.log(myOnlineShop.loadingStore('headphones', 10, 200));
    // console.log(myOnlineShop.loadingStore('laptop', 5, 200));

    // console.log(myOnlineShop.quantityCheck('headphones', 10));
    // console.log(myOnlineShop.quantityCheck('laptop', 10));
    // console.log(myOnlineShop.quantityCheck('TV', 40,));
    // console.log('------------------------------------------');
    // const myOnlineShop = new OnlineShop(500)
    // console.log(myOnlineShop.loadingStore('headphones', 10, 200));
    // console.log(myOnlineShop.loadingStore('laptop', 5, 200));
    // console.log(myOnlineShop.quantityCheck('headphones', 10));
    // console.log(myOnlineShop.quantityCheck('laptop', 10));
    // console.log(myOnlineShop.sellProduct('headphones'));
    // console.log(myOnlineShop.sellProduct('laptop'));
    // console.log(myOnlineShop.sellProduct('keyboard'));
    console.log('------------------------------------------');
    const myOnlineShop = new OnlineShop(500)
    console.log(myOnlineShop.loadingStore('headphones', 10, 200));
    console.log(myOnlineShop.loadingStore('laptop', 5, 200));

    console.log(myOnlineShop.quantityCheck('headphones', 10));
    console.log(myOnlineShop.quantityCheck('laptop', 10));

    console.log(myOnlineShop.sellProduct('headphones'));
    console.log(myOnlineShop.sellProduct('laptop'));
    console.log(myOnlineShop.revision());
}

solve()