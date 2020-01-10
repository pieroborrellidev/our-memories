const express = require('express');
const router = express.Router();
const Memory = require('../schemas/memory');

router.get('/', (req, res) => { 
    return Memory.find().then(memories => {
       return res.status(200).send(memories);
    });
});

module.exports = router;