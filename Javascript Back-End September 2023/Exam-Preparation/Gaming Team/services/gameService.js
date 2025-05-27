const Game = require('../models/Game');

async function getAll() {
    const games = await Game.find({})
        .lean()
        .populate();
    // console.log(games);
    return games;
}

async function getById(id) {
    // return Game.findById(id).lean();
    return Game.findOne({ _id: id })
    .lean()
    .populate();
}

function getPlatforms() {
    return platforms;
};

async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, imgurl, price, description, genre, platform } = reqBody;
    // console.log(name);
    // console.log(imgurl);
    // console.log(price);
    // console.log(description);
    // console.log(genre);
    // console.log(platform);
    // console.log(ownerId);
    const game = {
        name,
        imgurl,
        price: Number(price),
        description,
        genre,
        platform,
        owner: ownerId,
    };
    // console.log(game);

    const result = await Game.create(game);
    // console.log(result);
    return result;
}

async function buyGame(gameId, userId) {
    const game = await Game.findById(gameId);
    game['boughtby'].push(userId);

    await game.save();
    return game;
}

async function updateById(gameId, reqBody) {
    const game = await Game.findById(gameId);

    const { name, imgurl, price, description, genre, platform } = reqBody;

    game['name'] = name;
    game['imgurl'] = imgurl;
    game['price'] = Number(price);
    game['description'] = description;
    game['genre'] = genre;
    game['platform'] = platform;

    await game.save();
    return game;
}

async function deleteById(gameId) {
    return Game.findByIdAndDelete(gameId);
}

async function search(reqQuery) {
    const name = (reqQuery.name || '').toLowerCase();
    // console.log(name);
    const nameRegExPattern = new RegExp(name, 'i');
    // console.log(nameRegExPattern);
    const platform = (reqQuery.platform || '').toLowerCase();
    // console.log(platform);
    const platformRegExPattern = new RegExp(platform, 'i');
    // console.log(platformRegExPattern);

    const games = await Game.find({
        $and: [
            { name: { $regex: nameRegExPattern } },
            { platform: { $regex: platformRegExPattern } }
        ]
    })
        .lean()
        .populate();
    // console.log(games);
    return games;
}

module.exports = {
    getAll,
    getById,
    getPlatforms,
    create,
    buyGame,
    updateById,
    deleteById,
    search
};