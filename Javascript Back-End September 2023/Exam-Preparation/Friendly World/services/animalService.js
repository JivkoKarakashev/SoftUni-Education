const Animal = require('../models/Animal');
const fulfilledformCheck = require('../utils/fulfilledFormCheck');

async function getLastThree() {
    const lastThree = await Animal.find()
        .sort({ _id: -1 })
        .limit(3)
        .lean()
        .populate();
    return lastThree;
}

async function getAll() {
    const animals = await Animal.find({})
        .lean()
        .populate();
    // console.log(animals);
    return animals;
}

async function getById(id) {
    // return Animal.findById(id).lean();
    return Animal.findOne({ _id: id }).lean().populate();
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, years, kind, image, need, location, description } = reqBody;
    const formEntries = { name, years, kind, image, need, location, description };
    // console.log(name);
    // console.log(description);
    // console.log(image);
    // console.log(ownerId);
    const animal = {
        name,
        years,
        kind,
        image,
        need,
        location,
        description,
        owner: ownerId,
    };
    // console.log(animal);
    fulfilledformCheck(formEntries);

    const result = await Animal.create(animal);
    // console.log(result);
    return result;
}

async function donate(animalId, emailId) {
    const animal = await Animal.findById(animalId);
    animal['donations'].push(emailId);
    
    await animal.save();
    return animal;
}

async function updateById(animalId, reqBody) {
    const animal = await Animal.findById(animalId);

    const { name, years, kind, image, need, location, description } = reqBody;
    const formEntries = { name, years, kind, image, need, location, description };
    fulfilledformCheck(formEntries);

    animal['name'] = name;
    animal['years'] = Number(years);
    animal['kind'] = kind;
    animal['image'] = image;
    animal['need'] = need;
    animal['location'] = location;
    animal['description'] = description;

    await animal.save();
    return animal;
}

async function deleteById(animalId) {
    return Animal.findByIdAndDelete(animalId);
}

async function search(reqQuery) {
    const search = reqQuery.toLowerCase();
    // console.log(search);
    const sRegExPattern = new RegExp(search, 'i');
    // console.log(sRegExPattern);

    const animals = await Animal.find({ location: { $regex: sRegExPattern } })
        .collation({ locale: 'en', strength: 2 })
        .lean()
        .populate();
    // console.log(animals);
    return animals;
}

module.exports = {
    getLastThree,
    getAll,
    getById,
    create,
    donate,
    updateById,
    deleteById,
    search
};