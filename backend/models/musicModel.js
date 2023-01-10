const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    thumbnail : String,
    file : String,
    artist : String,
    year : Number,
    genre : String,
});

module.exports = model('music', myschema);