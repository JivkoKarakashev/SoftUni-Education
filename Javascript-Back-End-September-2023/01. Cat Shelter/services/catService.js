const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./services/data.json'));
const breeds = JSON.parse(fs.readFileSync('./services/breeds.json'));

// const breeds = [
//     {
//         breed: 'Bombay Cat'
//     },
//     {
//         breed: 'American Bobtail Cat'
//     },
//     {
//         breed: 'Bengal Cat'
//     },
//     {
//         breed: 'British Shorthair Cat'
//     },
//     {
//         breed: 'Unknown'
//     },
// ];

function getBreed() {
    return breeds;
};
async function addBreed(breed) {
    breeds.push({ breed });
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/breeds.json',
            JSON.stringify(breeds, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
};
function getData(search) {
    return data.filter((cats) => cats['name'].toLowerCase().includes(search.toLowerCase())
        || cats['breed'].toLowerCase().includes(search.toLowerCase()));
}
function getById(id) {
    return data.find((cat) => cat.id == id);
}
async function addCat(image, name, breed, description) {
    const id = (Math.random() * 99999 | 0).toString(16);
    data.push({
        id,
        image,
        name,
        breed,
        description,
    });
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/data.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
}
async function deleteById(id) {
    const index = data.findIndex((cat) => cat.id == id);
    data.splice(index, 1);
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/data.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
}

module.exports = {
    getBreed,
    addBreed,
    getData,
    getById,
    addCat,
    deleteById,
}