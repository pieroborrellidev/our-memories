const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const multer = require('multer');

const memories = require('./routes/memories');
const images = require('./routes/images');

app.use(cors())
app.use(express.json());
app.use('/memories', memories);
app.use('/images', images);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose.connect('mongodb://localhost/memories')
    .then(() => console.log("correctly connected to database"))
    .catch(() => console.log("error while trying to connect to db"));