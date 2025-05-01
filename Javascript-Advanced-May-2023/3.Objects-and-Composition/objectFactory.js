function factory(libObj, ordersArr) {

    const outputObjsArray = [];

    for (const currObj of ordersArr) {
        const {name} = currObj.template;
        // console.log(name);
        const outputObject = {
            name,
        };
        for (const currFunc of currObj.parts) {
            // console.log(currFunc);
            outputObject[currFunc] = libObj[currFunc];
        }
        outputObjsArray.push(outputObject);
    }

    return outputObjsArray;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);

// factory()