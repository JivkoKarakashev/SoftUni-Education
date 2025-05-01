function cityTaxes(name, population, treasury) {

    const cityObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            Math.ceil(this.treasury *= (100 - percentage) / 100);
        },
    };

    return cityObj;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);

console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(50);
console.log(city.treasury);

// cityTaxes('Tortuga', 7000, 15000);