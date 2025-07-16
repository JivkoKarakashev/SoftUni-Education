const { Router } = require('express');
const profileController = Router();

const { getByUserPosts } = require('../services/creatureService');

profileController.get('/', async (req, res, next) => {
    // console.log(req.user);
    const posts = await getByUserPosts(req.user['_id']);
    // console.log(posts);
    res.render('my-posts', {
        title: 'My Posts',
        posts,
    });
});

module.exports = profileController;