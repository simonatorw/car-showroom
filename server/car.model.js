const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    id: Number,
    name: String
});