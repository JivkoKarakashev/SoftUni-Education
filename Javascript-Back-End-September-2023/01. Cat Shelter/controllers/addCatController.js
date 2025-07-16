// const express = require('express');
// const router = express.Router();

const multer = require('multer');
// const upload = multer({ dest: './static/uploads/' });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage })

const { Router } = require('express');
const router = Router();

const { getBreed, addCat } = require('../services/catService');

router.get('/', (req, res) => {
    const breeds = getBreed();
    res.render('addCat',{
        breeds,
    });
});

router.post('/', upload.single('image'), async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.file);
    const { name, breed, description } = req.body;
    const image = '/static/uploads/' + req.file.originalname;
    // console.log(image);
    // console.log(name);
    // console.log(breed);
    // console.log(description);
    try {
        await addCat(image ,name, breed, description);        
    } catch (err) {
        next(err);
    }
    res.redirect('/');
});

module.exports = router;