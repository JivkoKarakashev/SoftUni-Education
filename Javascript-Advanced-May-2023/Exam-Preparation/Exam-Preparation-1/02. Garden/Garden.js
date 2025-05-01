function solve() {
    class Garden {
        constructor(space) {
            this.spaceAvailable = space;
        }
        plants = [];
        storage = [];
        addPlant(plantName, spaceRequired) {
            if (spaceRequired > this.spaceAvailable) {
                throw new Error('Not enough space in the garden.')
            }
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
        ripenPlant(plantName, quantity) {
            let plantIdx = this.plants.findIndex((plant) => plant['plantName'] === plantName);
            if (plantIdx === -1) {
                throw new Error(`There is no ${plantName} in the garden.`);
            }
            if (this.plants[plantIdx].ripe === true) {
                throw new Error(`The ${plantName} is already ripe.`);
            }
            if (quantity <= 0) {
                throw new Error('The quantity cannot be zero or negative.');
            }
            this.plants[plantIdx].ripe = true;
            this.plants[plantIdx].quantity += quantity;
            if (quantity === 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            } else if (quantity > 1) {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
        harvestPlant(plantName) {
            let plantIdx = this.plants.findIndex((plant) => plant['plantName'] === plantName);
            if (plantIdx === -1) {
                throw new Error(`There is no ${plantName} in the garden.`)
            }
            if (this.plants[plantIdx].ripe === false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            }
            this.storage.push({
                plantName,
                quantity: this.plants[plantIdx].quantity,
            });
            this.spaceAvailable += this.plants[plantIdx].spaceRequired;
            this.plants.splice(plantIdx, 1);
            return `The ${plantName} has been successfully harvested.`
        }
        generateReport() {
            const soretPlantsArr = this.plants.sort((plA, plB) => plA.plantName.localeCompare(plB.plantName));
            const secondLineArr = [];
            soretPlantsArr.forEach(plant => secondLineArr.push(plant.plantName));
            const thirdLineArr = [];
            const thirdLineStr = 'Plants in storage: The storage is empty.';
            let thirdLineResult;
            if (this.storage.length !== 0) {
                this.storage.forEach(plant => thirdLineArr.push(`${plant.plantName} (${plant.quantity})`));
                thirdLineResult = thirdLineArr.join(', ');
            } else {
                thirdLineResult = thirdLineStr;
            }
            return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${secondLineArr.join(', ')}\nPlants in storage: ${thirdLineResult}`;
        }
    }

    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 200));
    // console.log(myGarden.addPlant('olive', 50));
    // console.log('---------------------------');
    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 100));
    // console.log(myGarden.addPlant('cucumber', 30));
    // console.log(myGarden.ripenPlant('apple', 10));
    // console.log(myGarden.ripenPlant('orange', 1));
    // console.log(myGarden.ripenPlant('orange', 4));
    // console.log('---------------------------');
    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 100));
    // console.log(myGarden.addPlant('cucumber', 30));
    // console.log(myGarden.ripenPlant('apple', 10));
    // console.log(myGarden.ripenPlant('orange', 1));
    // console.log(myGarden.ripenPlant('olive', 30));
    // console.log('---------------------------');
    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 100));
    // console.log(myGarden.addPlant('cucumber', 30));
    // console.log(myGarden.ripenPlant('apple', 10));
    // console.log(myGarden.ripenPlant('orange', 1));
    // console.log(myGarden.ripenPlant('cucumber', -5));
    // console.log('---------------------------');
    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 200));
    // console.log(myGarden.addPlant('raspberry', 10));
    // console.log(myGarden.ripenPlant('apple', 10));
    // console.log(myGarden.ripenPlant('orange', 1));
    // console.log(myGarden.harvestPlant('apple'));
    // console.log(myGarden.harvestPlant('olive'));
    // console.log('---------------------------');
    // const myGarden = new Garden(250)
    // console.log(myGarden.addPlant('apple', 20));
    // console.log(myGarden.addPlant('orange', 200));
    // console.log(myGarden.addPlant('raspberry', 10));
    // console.log(myGarden.ripenPlant('apple', 10));
    // console.log(myGarden.ripenPlant('orange', 1));
    // console.log(myGarden.harvestPlant('orange'));
    // console.log(myGarden.generateReport());
    console.log('---------------------------');
    const myGarden = new Garden(250)
    console.log(myGarden.addPlant('apple', 20));
    console.log(myGarden.addPlant('orange', 200));
    console.log(myGarden.addPlant('raspberry', 10));
    console.log(myGarden.ripenPlant('apple', 10));
    console.log(myGarden.ripenPlant('orange', 1));
    console.log(myGarden.harvestPlant('apple'));
    console.log(myGarden.harvestPlant('raspberry'));
    console.log(myGarden.harvestPlant('olive'));
}
solve()