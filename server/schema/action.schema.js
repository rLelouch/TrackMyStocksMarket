const {Schema, model } = require('mongoose');

const actionSchema = Schema({
    _id: Number,
    airLiquide :
    {
        nbAction : Number,
        variationBaisseAction : Number,
        palierBaisseAction : Number,
    },
    orange :
    {
        nbAction : Number,
        variationBaisseAction : Number,
        palierBaisseAction : Number,
    },
    eth :
    {
        nbAction : Number,
        variationBaisseAction : Number,
        palierBaisseAction : Number,
    }
});

module.exports = model('Action', actionSchema);