const mongoose = require('mongoose');

const CarSchema = require('./car.model')

const config = {
    db: 'mongodb://localhost/mean'
};

module.exports = function() {
    const db = mongoose.connect(config.db);

    mongoose.model('Car', CarSchema);
    return db;
};
