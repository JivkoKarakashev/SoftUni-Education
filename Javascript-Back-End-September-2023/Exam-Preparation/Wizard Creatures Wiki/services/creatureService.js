const Creature = require('../models/Creature');

async function getAll() {
    const creatures = await Creature.find({})
        .lean()
        .populate();
    // console.log(creatures);
    return creatures;
}

async function getById(id) {
    // return Creature.findById(id).lean();
    return Creature.findOne({ _id: id }).lean()
    .populate('votes', 'email')
    .populate('owner');
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, species, skincolor, eyecolor, imgUrl, description } = reqBody;
    // console.log(name);
    // console.log(species);
    // console.log(skincolor);
    // console.log(eyecolor);
    // console.log(imgUrl);
    // console.log(description);
    const creature = {
        name,
        species,
        skincolor,
        eyecolor,
        imgUrl,
        description,
        owner: ownerId,
    };
    // console.log(creature);

    const result = await Creature.create(creature);
    // console.log(result);
    return result;
}

async function updateById(creatureId, reqBody) {
    const creature = await Creature.findById(creatureId);

    const { name, species, skincolor, eyecolor, imgUrl, description } = reqBody;

    creature['name'] = name;
    creature['species'] = species;
    creature['skincolor'] = skincolor;
    creature['eyecolor'] = eyecolor;
    creature['imgUrl'] = imgUrl;
    creature['description'] = description;
    
    await creature.save();
    return creature;
}

async function deleteById(creatureId) {
    return Creature.findByIdAndDelete(creatureId);
}

async function vote(creatureId, userId) {
    const creature = await Creature.findById(creatureId);
    creature['votes'].push(userId);

    await creature.save();
    return creature;
}

async function getByUserPosts(userId) {
    // console.log(userId);
    const posts = await Creature.find({ owner: userId }).populate('owner').lean();
    // console.log(posts);
    return posts;
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    vote,
    getByUserPosts
};