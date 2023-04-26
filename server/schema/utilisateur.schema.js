const {Schema, model } = require('mongoose');

const utilisateurSchema = Schema({
    prenom : String,
    email : String
});

module.exports = model('User', utilisateurSchema);
