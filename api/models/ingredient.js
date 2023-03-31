const mongoose = require ('mongoose');

userSchema = new mongoose.Schema({
    category : String,
    name : String,
    season : String
});

module.exports = mongoose.model('User', userSchema);