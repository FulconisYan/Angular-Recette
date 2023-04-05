const mongoose = require('mongoose');

ingredientSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    __v: Number,
    category: String,
    name: String,
    season: String,
    pictures: [String]
});

module.exports = mongoose.model('Ingredient', ingredientSchema);