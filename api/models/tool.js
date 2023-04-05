const mongoose = require('mongoose');

toolsSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    __v: Number,
    name: String,
    picture: String
});

module.exports = mongoose.model('Tool', toolsSchema);