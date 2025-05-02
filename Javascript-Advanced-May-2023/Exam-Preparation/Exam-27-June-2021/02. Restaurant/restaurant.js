function solve() {
    class Restaurant {
        constructor(budgetMoney,) {
            this.budgetMoney = budgetMoney;
            this.menu = {};
            this.stockProducts = {};
            this.history = [];
        }
        loadProducts(products) {
            for (let product of products) {
                let [productName, productQuantity, productTotalPrice] = product.split(' ');
                productQuantity = Number(productQuantity);
                productTotalPrice = Number(productTotalPrice);
                if (productTotalPrice <= this.budgetMoney) {
                    if (!this.stockProducts.hasOwnProperty(productName)) {
                        this.stockProducts[productName] = 0;
                    }
                    this.stockProducts[productName] += productQuantity;
                    this.budgetMoney -= productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                }
            }
            return this.history.join('\n');
        }
        addToMenu(meal, neededProducts, price) {
            if (!this.menu.hasOwnProperty(meal)) {
                this.menu[meal] = {};
                for (let product of neededProducts) {
                    let [productName, productQuantity] = product.split(' ');
                    productQuantity = Number(productQuantity);
                    price = Number(price);
                    this.menu[meal][productName] = productQuantity;
                    this.menu[meal]['price'] = price;
                }
            } else {
                return `The ${meal} is already in the our menu, try something different.`;
            }
            const menuLength = Object.keys(this.menu).length;
            if (menuLength === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
            }
        }
        showTheMenu() {
            const menuLength = Object.keys(this.menu).length;
            const outputMealsArray = [];
            if (menuLength > 0) {
                for (let meal of Object.entries(this.menu)) {
                    outputMealsArray.push(`${meal[0]} - $ ${meal[1].price}`);
                }
                return outputMealsArray.join('\n');
            }
            return 'Our menu is not ready yet, please come later...';
        }
        makeTheOrder(meal) {
            let readyToCook = true;
            if (!this.menu.hasOwnProperty(meal)) {
                return `There is not ${meal} yet in our menu, do you want to order something else?`;
            }
            let menuMealArr = Object.entries(this.menu[meal]);
            // console.log(menuMealArr);
            for (let product of menuMealArr) {
                if (product[0] !== 'price') {
                    let currProductName = product[0];
                    let currProductQuantity = product[1];
                    if (!this.stockProducts.hasOwnProperty(currProductName) || this.stockProducts[currProductName] < currProductQuantity) {
                        readyToCook = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                    }
                }
            }
            if (readyToCook) {
                let mealPrice = 0;
                menuMealArr = Object.entries(this.menu[meal]);
                for (let product of menuMealArr) {
                    if (product[0] !== 'price') {
                        let currProductName = product[0];
                        let currProductQuantity = product[1];
                        this.stockProducts[currProductName] -= currProductQuantity;
                    } else if (product[0] === 'price') {
                        mealPrice = product[1];
                        this.budgetMoney += mealPrice;
                    }
                }
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;
            }
        }
    }
    // let kitchen = new Restaurant(1000);
    // console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
    // console.log('-------------------------------------------------------');
    // let kitchen = new Restaurant(1000);
    // console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
    // console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
    // console.log('-------------------------------------------------------');
    // let kitchen = new Restaurant(1000);
    // console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
    // console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
    // console.log(kitchen.showTheMenu());    
    // console.log('-------------------------------------------------------');
    let kitchen = new Restaurant(1000);
    kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
    kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
    console.log(kitchen.makeTheOrder('frozenYogurt'));
}

solve()