const mongoose = require ('mongoose');

customerSchema = new mongoose.Schema({
    name : String,
    age : String
});

module.exports = mongoose.model('User', customerSchema);
