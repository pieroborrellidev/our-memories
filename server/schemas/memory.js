const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MemorySchema = new Schema({
    title: String,
    fromDate: Date,
    toDate: Date,
    friends: [ { type: String } ]
});

const Memory = mongoose.model('Memories', MemorySchema);
module.exports = Memory;