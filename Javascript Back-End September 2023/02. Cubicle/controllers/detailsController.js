// const express = require('express');
// const detailsController = express.Router();

const { Router } = require('express');
const detailsController = Router();

const { getById, getDifficultyLevels, diffLevels, updateById, deleteById } = require('../services/cubicleServiceDB');
const { getCubeAccessories } = require('../services/accessoryServiceDB');

detailsController.get('/:id', async (req, res) => {
    const cubeId = req.params['id'];
    try {
        const cubeObj = await getById(cubeId);
        const isOwner = req.user && req.user['_id'] == cubeObj['owner'];
        // console.log(cubeObj);
        if (cubeObj) {
            const hasAccessories = cubeObj['accessories'] != undefined;
            let accessories = null;
            if (hasAccessories) {
                accessories = await getCubeAccessories(cubeObj);
            }
            res.render('details', {
                title: 'Attach Accessory',
                cubeObj,
                accessories,
                isOwner,
            });
            // console.log(hasAccessories);
            // console.log(accessories);
        } else {
            res.status(404)
                .render('404', {
                    title: 'Page Not Found',
                });
        }
    } catch (err) {
        res.status(404)
            .render('404', {
                title: 'Page Not Found',
            });
    }
});

detailsController.get('/:id/edit', async (req, res, next) => {
    // console.log(req.body);
    const cubeId = req.params['id'];
    const cubeObj = await getById(cubeId);
    if (!req.user || cubeObj.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    const currDifficultyLevel = diffLevels[cubeObj['difficultyLevel']];
    const leftDifficultyLevels = getDifficultyLevels(cubeObj['difficultyLevel']);
    // console.log('Edit Page');
    // console.log(currDifficultyLevel);
    // console.log(leftDifficultyLevels);
    res.render('editCubePage', {
        title: 'Edit Cube Page',
        cubeObj,
        currDifficultyLevel,
        leftDifficultyLevels,
    });
    // next();
});

detailsController.post('/:id/edit', async (req, res, next) => {
    // console.log(req.body);
    const cubeId = req.params['id'];
    const cubeObj = await getById(cubeId);
    if (!req.user || cubeObj.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const currDifficultyLevel = diffLevels[difficultyLevel];
    const leftDifficultyLevels = getDifficultyLevels(difficultyLevel);
    // console.log(name);
    // console.log(description);
    // console.log(imageUrl);
    // console.log(difficultyLevel);
    // console.log(currDifficultyLevel);
    // console.log(leftDifficultyLevels);
    try {
        const result = await updateById(cubeId, req.body);
        res.redirect('/details/' + result['_id']);
    } catch (err) {
        // next(err);
        // console.log(req.body);
        req.body['_id'] = cubeId;
        res.render('editCubePage', {
            title: 'Edit Cube Page',
            cubeObj: req.body,
            currDifficultyLevel,
            leftDifficultyLevels,
            error: err.message.split('\n'),
        });
    }
    // next();
    // res.redirect('/');
});

detailsController.get('/:id/delete', async (req, res, next) => {
    // console.log(req.body);
    const cubeId = req.params['id'];
    const cubeObj = await getById(cubeId);
    if (!req.user || cubeObj.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    const currDifficultyLevel = diffLevels[cubeObj['difficultyLevel']];
    const leftDifficultyLevels = getDifficultyLevels(cubeObj['difficultyLevel']);
    // console.log('Delete Page');
    // console.log(currDifficultyLevel);
    // console.log(leftDifficultyLevels);
    res.render('deleteCubePage', {
        title: 'Delete Cube Page',
        cubeObj,
        currDifficultyLevel,
        leftDifficultyLevels,
    });
    // next();
});

detailsController.post('/:id/delete', async (req, res, next) => {
    // console.log(req.body);
    const cubeId = req.params['id'];
    const cubeObj = await getById(cubeId);
    if (!req.user || cubeObj.owner != req.user['_id']) {
        return res.redirect('/auth/login');
    }
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const currDifficultyLevel = diffLevels[difficultyLevel];
    const leftDifficultyLevels = getDifficultyLevels(difficultyLevel);
    // console.log(name);
    // console.log(description);
    // console.log(imageUrl);
    // console.log(difficultyLevel);
    // console.log(currDifficultyLevel);
    // console.log(leftDifficultyLevels);
    try {
        await deleteById(cubeId);
        res.redirect('/');
    } catch (err) {
        // next(err);
        // console.log(req.body);
        req.body['_id'] = cubeId;
        res.render('deleteCubePage', {
            title: 'Delete Cube Page',
            cubeObj: req.body,
            currDifficultyLevel,
            leftDifficultyLevels,
            error: err.message.split('\n'),
        });
    }
    // next();
});

module.exports = detailsController;