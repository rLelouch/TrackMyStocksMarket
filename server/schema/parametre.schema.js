const {Schema, model } = require('mongoose');

const parametreSchema = Schema({
    _id: Number,
    language : String,
    lightMode : Boolean
});

module.exports = model('Parametre', parametreSchema);