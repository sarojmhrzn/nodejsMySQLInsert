//import packages
const express = require('express');

//import services
const carService = require('./services/car');

let app = express();

app.use(express.json());

// Get homepage
app.get('/', function(req, res, next) {
    res.json({message: 'Welcome to the page!'});
});

// Get all cars
app.get('/cars', function(req, res, next) {
    carService.getAll()
        .then(function (cars) {
            res.json({cars});
        }).catch(function (err) {
            next(err);
        })
});


// Save car data
app.post('/car', function(req, res, next) {
    let name = req.body.name;
    let modelNumber = req.body.modelNumber;
    let price = req.body.price;

    carService.insert(name, modelNumber, price)
        .then(function (resp) {
            res.json(resp)
        }).catch(function (err) {
            next(err);
        });
});

// listen port 3000
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;