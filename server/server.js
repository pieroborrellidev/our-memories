const express = require("express");
const mongoose = require('mongoose');
const app = express();
const memories = require('./routes/memories');

app.use(express.json());
app.use('/memories', memories);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose.connect('mongodb://localhost/memories')
    .then(() => console.log("correctly connected to database"))
    .catch(() => console.log("error while trying to connect to db"));