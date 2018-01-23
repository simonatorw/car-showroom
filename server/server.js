const mongooseConfig = require('./mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const db = mongooseConfig();
const app = express();

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());
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
    })
    .post(function(req, res, next) {
        const car = new Car(req.body);

        car.save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(car);
            }
        });
    });

app.route('/cars/:_id')
    .delete(function(req, res, next) {
        req.car.remove(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(req.car);
            }
        });
    })
    .put(function(req, res, next) {
        Car.findByIdAndUpdate(req.car._id, req.body, function(err, car) {
            if (err) {
                return next(err);
            } else {
                res.json(car);
            }
        });
    });    

app.param('_id', function(req, res, next, id) {
    Car.findOne({
        _id: id
    }, function(err, car) {
        if (err) {
            return next(err);
        } else {
            req.car = car;
            next();
        }
    });
});