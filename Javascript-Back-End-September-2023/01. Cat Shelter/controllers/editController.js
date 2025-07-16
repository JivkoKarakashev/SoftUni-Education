// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const router = Router();
const { getById, getBreed } = require('../services/catService');

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
const upload = multer({ storage: storage });

router.get('/:catId', (req, res) => {
    const catId = req.params['catId'];
    const catObj = getById(catId);
    const breeds = getBreed().filter((br) => br.breed != catObj.breed);
    res.render('editCat', {
        catSearch: false,
        breeds,
        catObj,
    });
});

router.post('/:catId', upload.single('image'), (req, res, next) => {
    // console.log(req.body);
    // console.log(req.file);
    let image = null;
    const { name, breed, description } = req.body;
    if (req.file) {
        image = '/static/uploads/' + req.file.originalname;        
    }
    // console.log(image);
    // console.log(name);
    // console.log(breed);
    // console.log(description);
    next();
    res.redirect('/');
});

module.exports = router;