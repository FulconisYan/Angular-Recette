const mongoose = require ('mongoose');

userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    _salt: String,
    __v: Number,
    name: String,
    password: String,
    profilePicture: String,
    resume: String,
    mail: String,
    nbCommentsPublished: Number,
    nbRecipesPublished: Number,
    avgRate: Number,
});

module.exports = mongoose.model('User', userSchema);
