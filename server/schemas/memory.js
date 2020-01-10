const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    fromDate: { type: Date, default: Date.now, required: true },
    toDate: { type: Date, default: Date.now, required: true },
    friends: [ { type: String } ],
    captionImage: { type: mongoose.Schema.Types.ObjectId, ref: 'Images'}
});

const Memory = mongoose.model('Memories', MemorySchema);
module.exports = Memory;