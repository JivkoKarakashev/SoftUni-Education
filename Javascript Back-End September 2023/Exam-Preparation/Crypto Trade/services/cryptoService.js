const Crypto = require('../models/Crypto');

async function getAll() {
    const offers = await Crypto.find({})
        .lean()
        .populate();
    // console.log(offers);
    return offers;
}

async function getById(id) {
    // return Game.findById(id).lean();
    return Crypto.findOne({ _id: id })
    .lean()
    .populate();
}

async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, imgurl, price, description, paymethod } = reqBody;
    // console.log(name);
    // console.log(imgurl);
    // console.log(price);
    // console.log(description);
    // console.log(paymethod);
    // console.log(ownerId);
    const offer = {
        name,
        imgurl,
        price: Number(price),
        description,
        paymethod,
        owner: ownerId,
    };
    // console.log(offer);

    const result = await Crypto.create(offer);
    // console.log(result);
    return result;
}

async function buyCrypto(offerId, userId) {
    const offer = await Crypto.findById(offerId);
    offer['boughtby'].push(userId);

    await offer.save();
    return offer;
}

async function updateById(offerId, reqBody) {
    const offer = await Crypto.findById(offerId);

    const { name, imgurl, price, description, paymethod } = reqBody;

    offer['name'] = name;
    offer['imgurl'] = imgurl;
    offer['price'] = Number(price);
    offer['description'] = description;
    offer['paymethod'] = paymethod;

    await offer.save();
    return offer;
}

async function deleteById(offerId) {
    return Crypto.findByIdAndDelete(offerId);
}

async function search(reqQuery) {
    const name = (reqQuery.name || '').toLowerCase();
    // console.log(name);
    const nameRegExPattern = new RegExp(name, 'i');
    // console.log(nameRegExPattern);
    const paymethod = (reqQuery.paymethod || '').toLowerCase();
    // console.log(paymethod);
    const paymethodRegExPattern = new RegExp(paymethod, 'i');
    // console.log(paymethodRegExPattern);

    const offers = await Crypto.find({
        $and: [
            { name: { $regex: nameRegExPattern } },
            { paymethod: { $regex: paymethodRegExPattern } }
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
    buyCrypto,
    updateById,
    deleteById,
    search
};