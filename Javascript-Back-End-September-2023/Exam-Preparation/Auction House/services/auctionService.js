const Auction = require('../models/Auction');

async function getAll() {
    const auctions = await Auction.find({ closed: false })
        .lean()
        .populate();
    // console.log(auctions);
    return auctions;
}

async function getById(id) {
    // return Auction.findById(id).lean();
    return Auction.findOne({ _id: id }).lean().populate();
    // .populate('votes', 'email')
    // .populate('owner');
}

async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { title, description, category, imgurl, price } = reqBody;
    // console.log(title);
    // console.log(description);
    // console.log(category);
    // console.log(imgurl);
    // console.log(price);
    const auction = {
        title,
        description,
        category,
        imgurl,
        price: Number(price),
        owner: ownerId,
    };
    // console.log(creature);

    const result = await Auction.create(auction);
    // console.log(result);
    return result;
}

async function updateById(auctionId, reqBody) {
    const auction = await Auction.findById(auctionId);

    const { title, description, category, imgurl, price } = reqBody;

    auction['title'] = title;
    auction['description'] = description;
    auction['category'] = category;
    auction['imgurl'] = imgurl;
    auction['price'] = Number(price);

    await auction.save();
    return auction;
}

async function deleteById(auctionId) {
    return Auction.findByIdAndDelete(auctionId);
}

async function placeBid(auctionId, userId, newPrice) {
    const auction = await Auction.findById(auctionId);

    auction['price'] = Number(newPrice);
    auction['bidder'] = userId;

    await auction.save();
    return auction;
}

async function getClosedByUser(userId) {
    // console.log(userId);
    const auctions = await Auction.find({ owner: userId, closed: true }).populate('bidder').lean();
    // console.log(auctions);
    return auctions;
}

async function closeAuction(auctionId) {
    // console.log(auctionId);
    const auction = await Auction.findById(auctionId);
    // console.log(auction);
    auction['closed'] = true;

    await auction.save();
    return auction;
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    placeBid,
    getClosedByUser,
    closeAuction
};