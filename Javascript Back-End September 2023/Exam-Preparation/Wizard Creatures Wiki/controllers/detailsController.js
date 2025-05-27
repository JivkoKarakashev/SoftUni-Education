const { Router } = require('express');
const detailsController = Router();
const { body, validationResult } = require('express-validator');

const { hasUser } = require('../middlewares/guards');
const { getById, vote, updateById, deleteById } = require('../services/creatureService');
const { parseError } = require('../utils/parser');

detailsController.get('/:id', async (req, res, next) => {
    // console.log(req.user);
    const creatureId = req.params['id'];
    // console.log(creatureId);
    const votes = {};
    try {
        const creature = await getById(creatureId);
        // console.log(creature['votes']);
        if (creature == null) {
            throw new Error('Page Not Found!')
        }
        votes['votesCounter'] = creature['votes'].length || 0;
        votes['votedUsers'] = creature['votes'].map((usr) => usr['email']).join(', ');
        if (req.user) {
            votes['user'] = req.user;
            votes['isOwner'] = req.user['_id'] == creature.owner['_id'];
            votes['hasVoted'] = creature['votes'].some((usr) => usr['_id'] == req.user['_id']);
            votes['canVote'] = votes['isOwner'] == false && votes['hasVoted'] == false;
        }
        // console.log(votes);
        // console.log(res.locals);
        res.render('details', {
            title: 'Details Page',
            creature,
            author: {
                fname: creature.owner['firstname'],
                lname: creature.owner['lastname'],
            },
            votes,
        });
    } catch (error) {
        const errors = parseError(error);
        res.render('404', {
            title: '404 Page',
            errors
        });
    }
});
detailsController.get('/:id/vote', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const creatureId = req.params['id'];
    const creature = await getById(creatureId);
    // console.log(creature)
    const votes = {};
    try {
        if (req.user) {
            votes['user'] = req.user;
            votes['isOwner'] = req.user['_id'] == creature.owner['_id'];
            votes['hasVoted'] = creature['votes'].some((usr) => usr['_id'] == req.user['_id']);
            votes['canVote'] = votes['isOwner'] == false && votes['hasVoted'] == false;
        } else {
            throw new Error('ACCESS DENIED!! You have no permissions!')
        }
        // console.log(votes);
        if (votes['isOwner'] == true) {
            throw new Error('Cannot vote your own creature!');
        }
        if (votes['hasVoted'] == true) {
            throw new Error('You already have voted!');
        }
        await vote(creatureId, req.user['_id']);
        res.redirect(`/details/${creatureId}`)
    } catch (error) {
        const errors = parseError(error);
        // console.log(votes);
        // console.log(errors);
        res.render('details', {
            title: 'Details Page',
            errors,
            creature,
            votes: {
                votesCounter: creature['votes'].length,
                votedUsers: creature['votes'].map((usr) => usr['email']).join(', ')
            }
        });
    }
});

detailsController.get('/:id/edit', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const creatureId = req.params['id'];
    const creature = await getById(creatureId);
    // console.log(creature);

    if (!req.user || creature.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Page',
        creature,
    });
});

detailsController.post('/:id/edit',
    hasUser(),
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Creature name must be at least 2 characters long!'),
    body('species')
        .trim()
        .isLength({ min: 3 }).withMessage('Species must be at least 3 characters long!'),
    body('skincolor')
        .trim()
        .isLength({ min: 3 }).withMessage('Skin color must be at least 3 characters long!'),
    body('eyecolor')
        .trim()
        .isLength({ min: 3 }).withMessage('Eye color must be at least 3 characters long!'),
    body('imgUrl')
        .trim()
        .isURL({ protocols: ['http', 'https'] }).withMessage('Image URL should starts with http or https'),
    body('description')
        .trim()
        .isLength({ min: 5, max: 500 }).withMessage('Description must be between 5 and 500 characters long!'),
    async (req, res, next) => {
        // console.log(req.body);
        const creatureId = req.params['id'];
        const creature = await getById(creatureId);

        if (!req.user || creature.owner['_id'] != req.user['_id']) {
            return res.redirect('/auth/login');
        }

        try {
            const { errors } = validationResult(req);
            // console.log(errors);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await updateById(creatureId, req.body);
            res.redirect('/details/' + result['_id']);
        } catch (error) {
            const errors = parseError(error);
            // console.log(errors);
            req.body['_id'] = creatureId;
            res.render('edit', {
                title: 'BookingUni',
                creature: req.body,
                errors,
            });
        }
    });

detailsController.get('/:id/delete', hasUser(), async (req, res, next) => {
    // console.log(req.body);
    const creatureId = req.params['id'];
    const creature = await getById(creatureId);

    if (!req.user || creature.owner['_id'] != req.user['_id']) {
        return res.redirect('/auth/login');
    }

    try {
        await deleteById(creatureId);
        res.redirect('/dashboard');
    } catch (error) {
        const errors = parseError(error);
        // console.log(errors);
        req.body['_id'] = creatureId;
        res.render('details', {
            title: 'BookingUni',
            creature: req.body,
            errors,
        });
    }
});

module.exports = detailsController;