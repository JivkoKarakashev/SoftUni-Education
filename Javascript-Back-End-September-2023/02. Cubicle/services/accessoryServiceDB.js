const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

async function getAllAccessories() {
    return Accessory.find({}).lean();
}

async function getCubeAccessories(cubeObj) {
    return Promise.all(cubeObj['accessories'].map((accessId) => Accessory.findOne({ _id: accessId }).lean()));
}

async function createAccessory(reqBody) {

    const { name, description, imageUrl } = reqBody;
    // console.log(name);
    // console.log(description);
    // console.log(imageUrl);

    const accessoryObj = {
        name,
        description,
        imageUrl,
    };
    const missingFields = Object.entries(accessoryObj).filter(([key, value]) => value == false);
    if (missingFields.length > 0) {
        throw new Error(missingFields.map((kvp) => `${kvp[0]} is required!`).join('\n'));
    }
    return Accessory.create(accessoryObj);
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId).populate('accessories');
    const accessories = await Accessory.find({ _id: { $in: accessoryId } });
    // console.log(cube);
    // console.log(accessories);

    // // Remove cube ref from removed accessories
    // const forRemove = cube.accessories.filter((a) => accessories.every((x) => x._id.toString() != a._id.toString()));
    // console.log('For remove', forRemove.map((a) => a.name));
    // forRemove.forEach((a) => {
    //     // Remove Cube from Accessory
    //     a.cubes.splice(a.cubes.findIndex((cId) => cId.toString() == cubeId), 1);
    //     // Remove Accessory from Cube
    //     cube.accessories.splice(cube.accessories.findIndex((x) => x._id.toString() == a._id.toString()), 1);
    // });

    // Determine cube ref from removed accessories
    const newlyAttached = accessories.filter((a) => cube.accessories.every((x) => x._id.toString() != a._id.toString()));
    // console.log('New to attach', newlyAttached.map((a) => a.name));

    // Add cube ref to newly attached accessories
    newlyAttached.forEach((a) => {
        cube.accessories.push(a);
        a.cubes.push(cube);
    });
    await cube.save();
    // await Promise.all(forRemove.map((a) => a.save()));
    await Promise.all(newlyAttached.map((a) => a.save()));
}

module.exports = {
    getAllAccessories,
    getCubeAccessories,
    createAccessory,
    attachAccessory,
};