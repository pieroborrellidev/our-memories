const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: { type: String },
    mimetype: { type: String },
    path: { type: String },
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'Memories'}});

const Image = mongoose.model('Images', ImageSchema);
module.exports = Image; 