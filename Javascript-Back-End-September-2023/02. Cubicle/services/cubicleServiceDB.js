const Cube = require('../models/Cube');

async function getAll(searchQueries) {
    const search = (searchQueries.search || '').toLowerCase();
    const from = Number(searchQueries.from) || 1;
    const to = Number(searchQueries.to) || 6;
    const sRegExPattern = new RegExp(search, 'i');
    // console.log(sRegExPattern);

    const cubesObjsArr = await Cube.find({
        $and: [
            { $or: [{ name: { $regex: sRegExPattern } }, { description: { $regex: sRegExPattern } }] },
            { difficultyLevel: { $gte: from } }, { difficultyLevel: { $lte: to } },
        ]
    })
        .collation({ locale: 'en', strength: 2 })
        .lean()
        .populate();
    // console.log(cubesObjsArr);
    return cubesObjsArr;
}

async function getById(id) {
    // return Cube.findById(id).lean();
    return Cube.findOne({ _id: id }).lean();
}


async function create(reqBody, ownerId) {

    const { name, description, imageUrl } = reqBody;
    const difficultyLevel = Number(reqBody['difficultyLevel']);
    // console.log(name);
    // console.log(description);
    // console.log(imageUrl);
    // console.log(difficultyLevel);
    // console.log(ownerId);
    const cubeObj = {
        name,
        description,
        imageUrl,
        difficultyLevel,
        owner: ownerId,
    };
    // console.log(cubeObj);
    
    const missingFields = Object.entries(cubeObj).filter(([key, value]) => value == false);
    if (missingFields.length > 0) {
        const resultErrors = [];
        for (let [key, value] of missingFields) {
            const errObj = {};
            errObj['msg'] = `${key} is required!`;
            errObj['path'] = key;
            resultErrors.push(errObj);            
        }
        // console.log(resultErrors);
        throw resultErrors;
    }

    const result = await Cube.create(cubeObj);
    return result;
}

const diffLevels = {
    '1': '1 - Very Easy',
    '2': '2 - Easyt',
    '3': '3 - Medium (Standard 3x3)',
    '4': '4 - Intermediate',
    '5': '5 - Expert',
    '6': '6 - Hardcore',
};
function getDifficultyLevels(currLevel) {
    const filtered = Object.fromEntries(Object.entries(diffLevels)
        .filter((kvp) => kvp[0] != currLevel));
    // .map((lvl) => diffLevels[lvl[0]]);
    // console.log(currLevel);
    // console.log(filtered);
    return filtered;
}

async function updateById(cubeId, cubeObj) {
    const cube = await Cube.findById(cubeId);

    cube.name = cubeObj['name'];
    cube.description = cubeObj['description'];
    cube.imageUrl = cubeObj['imageUrl'];
    cube.difficultyLevel = Number(cubeObj['difficultyLevel']);

    const missingFields = Object.entries(cubeObj).filter(([key, value]) => value == false);
    // console.log(missingFields);
    if (missingFields.length > 0) {
        throw new Error(missingFields.map((kvp) => `${kvp[0]} is required!`));
    }

    await cube.save();
    return cube;
}

async function deleteById(cubeId) {
    return Cube.findByIdAndDelete(cubeId);
}

module.exports = {
    getAll,
    getById,
    create,
    diffLevels,
    getDifficultyLevels,
    updateById,
    deleteById,
};