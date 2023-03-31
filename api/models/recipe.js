const mongoose = require ('mongoose');

recipeSchema = new mongoose.Schema({
    title : String,
    duration : String,
    difficulty : String,
    image : String,
    rate : String,
});

module.exports = mongoose.model('Recipe', recipeSchema);