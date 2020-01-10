const express = require('express');
const router = express.Router();
const Image = require('../schemas/image');
const multer = require('multer');

const upload = multer({
    dest: './uploads'
});


router.get('/', (req, res) => {
    return Image.find().then((images) => {
        return res.status(200).send(images);
    });  
});

router.post('/', upload.single("file"), (req, res) => {
    const image = new Image({
        name: req.file.name,
        mimetype: req.file.mimetype,
        path: req.file.path,
    });
    return image.save().then(() => {
        console.log("image was saved");
    })
});

module.exports = router;