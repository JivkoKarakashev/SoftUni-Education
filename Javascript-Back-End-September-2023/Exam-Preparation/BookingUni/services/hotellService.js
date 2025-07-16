const Hotel = require('../models/Hotel');

async function getAll() {
    const hotels = await Hotel.find({})
        .lean()
        .populate();
    // console.log(hotels);
    return hotels;
}

async function getById(id) {
    // return Hotel.findById(id).lean();
    return Hotel.findOne({ _id: id }).lean().populate();
}


async function create(reqBody, ownerId) {
    // console.log(reqBody);
    // console.log(ownerId);
    const { name, city, rooms, imgUrl } = reqBody;
    // console.log(name);
    // console.log(city);
    // console.log(rooms);
    // console.log(imgUrl);
    // console.log(ownerId);
    const hotel = {
        name,
        city,
        rooms: Number(rooms),
        imgUrl,
        owner: ownerId,
    };
    // console.log(hotel);

    const result = await Hotel.create(hotel);
    // console.log(result);
    return result;
}

async function updateById(hotelId, reqBody) {
    const hotel = await Hotel.findById(hotelId);

    const { name, city, rooms, imgUrl } = reqBody;

    hotel['name'] = name;
    hotel['city'] = city;
    hotel['rooms'] = Number(rooms);
    hotel['imgUrl'] = imgUrl;

    await hotel.save();
    return hotel;
}

async function deleteById(hotelId) {
    return Hotel.findByIdAndDelete(hotelId);
}

async function bookHotel(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);
    hotel['bookedusers'].push(userId);

    await hotel.save();
    return hotel;
}

async function getByUserBookings(userId) {
    // console.log(userId);
    const bookings = await Hotel.find({ bookedusers: userId }).populate('bookedusers', 'email').lean();
    const bookingsArr = bookings.map((b) => b.name);
    // console.log(bookingsArr);
    return bookingsArr;
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    bookHotel,
    getByUserBookings
};