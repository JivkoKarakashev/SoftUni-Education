function solve() {
    class WineSelection {
        #cellarRevisionFunc = (wineType) => {
            let resultwinesObjsArray = JSON.parse(JSON.stringify(this.wines));
            const wineIdx = resultwinesObjsArray.findIndex((wine) => wine['wineType'] === wineType);
            const outputWinesObjsArray = [];
            if (wineType === undefined) {
                resultwinesObjsArray.sort((wineAobj, wineBobj) => wineAobj.wineName.localeCompare(wineBobj.wineName));
            } else if (wineIdx === -1) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                resultwinesObjsArray = this.wines.filter((wine) => wine['wineType'] === wineType);
            }
            for (let wineObj of resultwinesObjsArray) {
                let paid = 'Has Paid';
                if (wineObj.paid === false) {
                    paid = 'Not Paid';
                }
                outputWinesObjsArray.push(`${wineObj.wineName} > ${wineObj.wineType} - ${paid}.`);
            }
            return outputWinesObjsArray;
        }
        constructor(space) {
            this.space = space;
            this.wines = [];
            this.bill = 0;
        }
        reserveABottle(wineName, wineType, price) {
            if (this.space <= 0) {
                throw new Error('Not enough space in the cellar.');
            }
            this.wines.push({ wineName, wineType, price, paid: false });
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
        payWineBottle(wineName, price) {
            const wineObjIdx = this.wines.findIndex((wine) => wine['wineName'] === wineName);
            if (wineObjIdx === -1) {
                throw new Error(`${wineName} is not in the cellar.`);
            }
            if (this.wines[wineObjIdx].paid === true) {
                throw new Error(`${wineName} has already been paid.`);
            }
            this.wines[wineObjIdx].paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`
        }
        openBottle(wineName) {
            const wineObjIdx = this.wines.findIndex((wine) => wine['wineName'] === wineName);
            if (wineObjIdx === -1) {
                throw new Error('The wine, you\'re looking for, is not found.');
            }
            if (this.wines[wineObjIdx].paid === false) {
                throw new Error(`${wineName} need to be paid before open the bottle.`);
            }
            this.wines.splice(wineObjIdx, 1);
            return `You drank a bottle of ${wineName}.`;
        }
        cellarRevision(wineType) {
            const outputWinesObjsArray = this.#cellarRevisionFunc(wineType);
            if (wineType === undefined) {
                return `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n${outputWinesObjsArray.join('\n')}`;
            } else {
                return outputWinesObjsArray.join('\n');
            }
        }
    }
    // const selection = new WineSelection(2)
    // console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
    // console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
    // console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
    // console.log('---------------------------------------------------------------');
    // const selection = new WineSelection(2)
    // selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    // console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
    // console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
    // console.log('---------------------------------------------------------------');
    // const selection = new WineSelection(2)
    // selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    // selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
    // selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
    // console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
    // console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
    // console.log('---------------------------------------------------------------');
    // const selection = new WineSelection(2)
    // console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
    // console.log(selection.cellarRevision('Rose'));
    console.log('---------------------------------------------------------------');
    const selection = new WineSelection(5)
    selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
    selection.payWineBottle('Bodegas Godelia Mencía', 144);
    selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
    selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
    console.log(selection.cellarRevision());
}

solve()