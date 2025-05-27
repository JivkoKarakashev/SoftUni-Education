const Ad = require('../models/Ad');

async function getfirstThree() {
    const firstThree = await Ad.find()
        .sort({ _id: 1 })
        .limit(3)
        .lean()
        .populate('applied');
    return firstThree;
}

async function getAll() {
    const ads = await Ad.find({})
        .lean()
        .populate();
    // console.log(ads);
    return ads;
}

async function getById(id) {
    // return Ad.findById(id).lean();
    return Ad.findOne({ _id: id })
        .populate('applied')
        .populate('owner')
        .lean();
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { headline, location, companyname, description } = reqBody;
    // console.log(headline);
    // console.log(location);
    // console.log(companyname);
    // console.log(ownerId);
    const ad = {
        headline,
        location,
        companyname,
        description,
        owner: ownerId,
    };
    // console.log(ad);

    const result = await Ad.create(ad);
    // console.log(result);
    return result;
}

async function applyJob(adId, userId) {
    const ad = await Ad.findById(adId);
    ad['applied'].push(userId);

    await ad.save();
    return ad;
}

async function updateById(adId, reqBody) {
    const ad = await Ad.findById(adId);

    const { headline, location, companyname, description } = reqBody;
    ad['headline'] = headline;
    ad['location'] = location;
    ad['companyname'] = companyname;
    ad['description'] = description;

    await ad.save();
    return ad;
}

async function deleteById(adId) {
    return Ad.findByIdAndDelete(adId);
}

async function search(reqQuery) {
    const search = reqQuery.toLowerCase();
    // console.log(search);
    const sRegExPattern = new RegExp(search, 'i');
    // console.log(sRegExPattern);

    const ads = await Ad.find().populate('owner').lean();
    // console.log(ads);
    return ads.filter((ad) => sRegExPattern.test(ad.owner['email']));
}

module.exports = {
    getfirstThree,
    getAll,
    getById,
    create,
    applyJob,
    updateById,
    deleteById,
    search
};