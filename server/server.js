const mongooseConfig = require('./mongoose');
const express = require('express');

const db = mongooseConfig();
const app = express();

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});

const Car = require('mongoose').model('Car')

app.route('/cars')
    .get(function(req, res, next) {
        Car.find({}, function(err, cars) {
            if (err) {
                return next(err);
            } else {
                res.json(cars);
            }
        });
    });