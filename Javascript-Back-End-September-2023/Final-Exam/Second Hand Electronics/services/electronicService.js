const Electronic = require('../models/Electronic');

async function getAll() {
    const offers = await Electronic.find({})
        .lean()
        .populate();
    // console.log(offers);
    return offers;
}

async function getById(id) {
    // return Electronic.findById(id).lean();
    return Electronic.findOne({ _id: id })
        .lean()
        .populate();
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, type, production, exploitation, damages, imgurl, price, description } = reqBody;

    const offer = {
        name,
        type,
        production: Number(production),
        exploitation: Number(exploitation),
        damages,
        imgurl,
        price: Number(price),
        description,
        owner: ownerId,
    };
    // console.log(offer);

    const result = await Electronic.create(offer);
    // console.log(result);
    return result;
}

async function buyById(offerId, userId) {
    const offer = await Electronic.findById(offerId);
    offer['buyinglist'].push(userId);

    await offer.save();
    return offer;
}

async function updateById(offerId, reqBody) {
    const offer = await Electronic.findById(offerId);

    const { name, type, production, exploitation, damages, imgurl, price, description } = reqBody;
    offer['name'] = name;
    offer['type'] = type;
    offer['production'] = Number(production);
    offer['exploitation'] = Number(exploitation);
    offer['damages'] = damages;
    offer['imgurl'] = imgurl;
    offer['price'] = Number(price);
    offer['description'] = description;

    await offer.save();
    return offer;
}

async function deleteById(offerId) {
    return Electronic.findByIdAndDelete(offerId);
}

async function searchFunc(search) {
    const name = (search.name || '').toLowerCase();
    // console.log(name);
    const nameRegEx = new RegExp(name, 'i');
    // console.log(nameRegEx);
    const type = (search.type || '').toLowerCase();
    // console.log(type);
    const typeRegEx = new RegExp(type, 'i');
    // console.log(typeRegEx);

    const offers = await Electronic.find({
        $and: [
            { name: { $regex: nameRegEx } },
            { type: { $regex: typeRegEx } }
        ]
    })
        .lean()
        .populate();
    // console.log(offers);
    return offers;
}

module.exports = {
    getAll,
    getById,
    create,
    buyById,
    updateById,
    deleteById,
    searchFunc
};