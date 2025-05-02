function solve() {
    class RefurbishedSmartphones {
        #totalIncome = 0;
        #sortFunc = (availPhonesArr, criteria) => {
            const sortObj = {
                'storage': (arr) => arr.sort((phoneObjA, phoneObjB) => phoneObjB.storage - phoneObjA.storage),
                'model': (arr) => arr.sort((phoneObjA, phoneObjB) => (phoneObjA.model).localeCompare(phoneObjB.model)),
            };
            const sortedPhonesObjsArr = sortObj[criteria](availPhonesArr);
            return sortedPhonesObjsArr;
        };
        constructor(retailer) {
            this.retailer = retailer;
            this.availableSmartphones = [];
            this.soldSmartphones = [];
            this.revenue = 0;
        }
        addSmartphone(model, storage, price, condition) {
            if (!model || !storage || storage < 0 || !Number.isInteger(storage) || !price || price < 0 || !condition) {
                throw new Error('Invalid smartphone!');
            }
            storage = Number(storage);
            price = Number(price);
            this.availableSmartphones.push({ model, storage, price, condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }
        sellSmartphone(modell, desiredStorage) {
            let smartPhoneIdx = this.availableSmartphones.findIndex((phone) => phone['model'] === modell);
            if (smartPhoneIdx === -1) {
                throw new Error(`${modell} was not found!`)
            }
            if (this.availableSmartphones[smartPhoneIdx].storage < desiredStorage) {
                const margin = desiredStorage - this.availableSmartphones[smartPhoneIdx].storage;
                if (margin <= 128) {
                    this.availableSmartphones[smartPhoneIdx].price *= 0.9;
                } else if (margin > 128) {
                    this.availableSmartphones[smartPhoneIdx].price *= 0.8;
                }
            }
            const soldPhone = this.availableSmartphones.splice(smartPhoneIdx, 1)[0];
            let { model, storage, price } = soldPhone;
            this.soldSmartphones.push({ model, storage, price });
            this.#totalIncome += price;
            return `${model} was sold for ${price.toFixed(2)}$`;
        }
        upgradePhones() {
            if (this.availableSmartphones.length === 0) {
                throw new Error('There are no available smartphones!');
            }
            this.availableSmartphones.map((phoneObj) => phoneObj.storage *= 2);
            const outputArray = [];
            for (const phone of this.availableSmartphones) {
                outputArray.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
            }
            return `Upgraded Smartphones:\n${outputArray.join('\n')}`;
        }
        salesJournal(criteria) {
            if (criteria !== 'storage' && criteria !== 'model') {
                throw new Error('Invalid criteria!');
            }
            const sortedPhonesObjsArr = this.#sortFunc(this.soldSmartphones, criteria);
            const outputArray = [];
            for (const phone of sortedPhonesObjsArr) {
                outputArray.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`);
            }
            return `${this.retailer} has a total income of ${this.#totalIncome.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:\n${outputArray.join('\n')}`;
        }
    }
    // let retailer = new RefurbishedSmartphones('SecondLife Devices');
    // console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
    // console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
    // console.log(retailer.addSmartphone('', 512, 1900, 'good'));
    // console.log('--------------------------------------------------------');
    // let retailer = new RefurbishedSmartphones('SecondLife Devices');
    // retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
    // retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
    // retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
    // console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
    // console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
    // console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
    // console.log('--------------------------------------------------------');
    // let retailer = new RefurbishedSmartphones('SecondLife Devices');
    // retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
    // retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
    // retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
    // console.log(retailer.upgradePhones());
    console.log('--------------------------------------------------------');
    let retailer = new RefurbishedSmartphones('SecondLife Devices');
    retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
    retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
    retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
    retailer.sellSmartphone('Samsung S20 Ultra', 256);
    retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
    console.log(retailer.salesJournal('model'));
}
solve()