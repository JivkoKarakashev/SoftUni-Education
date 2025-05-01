function solve() {
    class CarDealership {
        #totalIncome = 0;
        #sortFunc = (arrObjs, criterion) => {
            let resultArr = [];
            const sortObj = {
                'horsepower': (arr) => arr.sort((carAObj, carBObj) => carBObj.horsepower - carAObj.horsepower),
                'model': (arr) => arr.sort((carAObj, carBObj) => carAObj.model.localeCompare(carBObj.model)),
            }
            resultArr = sortObj[criterion](arrObjs);
            return resultArr;
        };
        constructor(name) {
            this.name = name;
            this.availableCars = [];
            this.soldCars = [];
            this.totalIncome = 0;
        }
        addCar(model, horsepower, price, mileage) {
            if (!model || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
                throw new Error('Invalid input!');
            }
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
        sellCar(modell, desiredMileage) {
            const carIdx = this.availableCars.findIndex((carObj) => carObj['model'] === modell);
            if (carIdx === -1) {
                throw new Error(`${modell} was not found!`);
            }
            const modelMileage = this.availableCars[carIdx].mileage;
            let priceDifference = 0;
            if (modelMileage > desiredMileage) {
                priceDifference = modelMileage - desiredMileage;
                if (priceDifference <= 40000) {
                    this.availableCars[carIdx].price *= 0.95;
                } else if (priceDifference > 40000) {
                    this.availableCars[carIdx].price *= 0.9;
                }
            }
            const soldCarObj = this.availableCars.splice(carIdx, 1);
            let { model, horsepower, price } = soldCarObj[0];
            this.soldCars.push({ model, horsepower, price });
            this.#totalIncome += price;
            return `${modell} was sold for ${price.toFixed(2)}$`;
        }
        currentCar() {
            const ouputAvailableCarsArray = [];
            if (this.availableCars.length === 0) {
                return 'There are no available cars';
            }
            for (let carObj of this.availableCars) {
                ouputAvailableCarsArray.push(`---${carObj.model} - ${carObj.horsepower} HP - ${carObj.mileage.toFixed(2)} km - ${carObj.price.toFixed(2)}$`);
            }
            return `-Available cars:\n${ouputAvailableCarsArray.join('\n')}`;
        }
        salesReport(criteria) {
            if (criteria !== 'horsepower' && criteria !== 'model') {
                throw new Error('Invalid criteria!');
            }
            const sortedSellsArray = this.#sortFunc(this.soldCars, criteria);
            const outputSellsArray = [];
            for (let sellCarObj of sortedSellsArray) {
                outputSellsArray.push(`---${sellCarObj.model} - ${sellCarObj.horsepower} HP - ${sellCarObj.price.toFixed(2)}$`);
            }
            return `-${this.name} has a total income of ${this.#totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n${outputSellsArray.join('\n')}`;
        }
    }
    // let dealership = new CarDealership('SoftAuto');
    // console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
    // console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
    // console.log(dealership.addCar('', 120, 4900, 240000));
    // console.log('---------------------------------------------------');
    // let dealership = new CarDealership('SoftAuto');
    // dealership.addCar('Toyota Corolla', 100, 3500, 190000);
    // dealership.addCar('Mercedes C63', 300, 29000, 187000);
    // dealership.addCar('Audi A3', 120, 4900, 240000);
    // console.log(dealership.sellCar('Toyota Corolla', 230000));
    // console.log(dealership.sellCar('Mercedes C63', 110000));
    // console.log('---------------------------------------------------');
    // let dealership = new CarDealership('SoftAuto');
    // dealership.addCar('Toyota Corolla', 100, 3500, 190000);
    // dealership.addCar('Mercedes C63', 300, 29000, 187000);
    // dealership.addCar('Audi A3', 120, 4900, 240000);
    // console.log(dealership.currentCar());
    console.log('---------------------------------------------------');
    let dealership = new CarDealership('SoftAuto');
    dealership.addCar('Toyota Corolla', 100, 3500, 190000);
    dealership.addCar('Mercedes C63', 300, 29000, 187000);
    dealership.addCar('Audi A3', 120, 4900, 240000);
    dealership.sellCar('Toyota Corolla', 230000);
    dealership.sellCar('Mercedes C63', 110000);
    console.log(dealership.salesReport('horsepower'));
}

solve()