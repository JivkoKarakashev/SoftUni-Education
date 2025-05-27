// const express = require('express');
// const attachAccessoryController = express.Router();

const { Router } = require('express');
const attachAccessoryController = Router();

const { getAllAccessories, attachAccessory } = require('../services/accessoryServiceDB');
const { getById } = require('../services/cubicleServiceDB');

// const { createAccessory } = require('../services/accessoryServiceDB');

attachAccessoryController.get('/:cubeId', async (req, res) => {
    const cubeId = req.params['cubeId'];
    const cube = await getById(cubeId);
    let accessories = await getAllAccessories();
    const hasAccessories = cube['accessories'] != undefined;
    if (hasAccessories) {
        accessories = accessories.filter((a) => cube['accessories'].every((x) => x._id.toString() != a._id.toString()));        
    }
    // console.log(accessories);

    res.render('attachAccessory', {
        title: 'Attach Accessory',
        cube,
        accessories,
    });
});

attachAccessoryController.post('/:cubeId', async (req, res, next) => {
    // console.log(req.body);
    const cubeId = req.params['cubeId'];
    const accessoryId = req.body['accessory'];
    try {
        await attachAccessory(cubeId, accessoryId);
        res.redirect('/details/' + cubeId);
    } catch (err) {
        // next(err);
        res.render('attachAccessory', {
            title: 'Attach Accessory',
            error: err.message.split('\n'),
        });
    }
});

module.exports = attachAccessoryController;