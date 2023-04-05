const mongoose = require ('mongoose');
const 

recipeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    __v: Number,
    title: String,
    duration: Number,
    difficulty: Number,
    rate: Number,
    calories: Number,
    carbonPrint: Number,
    diet: String,
    likes: Number,
    season: String,
    summary: String,
    commentaries: [String],
    ingredients: [String],
    pictures: [String],
    steps: [String],
    videos: [String],
    tools: [String],
    cookTime: {min: Number, max: Number},
    preparationTime: {min: Number, max: Number}
});

module.exports = mongoose.model('Recipe', recipeSchema);