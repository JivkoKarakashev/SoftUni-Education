function cityTaxes(name, population, treasury) {

    function collectTaxes () {
        return this.treasury += Math.floor(this.population * this.taxRate);
    };

    function applyGrowth (percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    };

    function applyRecession (percentage) {
        Math.ceil(this.treasury *= (100 - percentage) / 100);
    };

    const cityObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,
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