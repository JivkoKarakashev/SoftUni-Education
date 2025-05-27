const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./services/database.json'));


async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/dataBase.json',
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
function getData(searchQueries) {
    // data = [];
    const search = (searchQueries.search || '').toLowerCase();
    const from = Number(searchQueries.from) || 1;
    const to = Number(searchQueries.to) || 6;
    return data
        .filter((cube) => cube.name.toLowerCase().includes(search) || cube.description.toLowerCase().includes(search))
        .filter((cube) => cube.difficultyLevel >= from && cube.difficultyLevel <= to);
}

async function addCube(reqBody) {
    const id = (Math.random() * 0xfffff * 10000000 | 0).toString(16);
    // console.log(parseInt(id, 16));
    const { name, description, imageUrl, difficultyLevel } = reqBody;
    // console.log(name);
    // console.log(description);
    // console.log(imageUrl);
    // console.log(difficultyLevel);
    const cubeObj = {
        id,
        name,
        description,
        imageUrl,
        difficultyLevel,
    };
    const missingFields = Object.entries(cubeObj).filter(([key, value]) => value == false);
    if (missingFields.length > 0) {
        throw new Error(missingFields.map((kvp) => `${kvp[0]} is required!`).join('\n'));
    }
    data.push(cubeObj);
    await persist();
    return cubeObj;
}
function getById(id) {
    return data.find((cube) => cube.id == id);
}

module.exports = {
    getData,
    addCube,
    getById,
};