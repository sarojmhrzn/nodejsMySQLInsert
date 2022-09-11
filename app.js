//import packages
const express = require('express');

//import services
const config = require('./config');
const carService = require('./services/car');

let app = express();

app.use(express.json());

// Get homepage
app.get('/', function(req, res, next) {
    res.json({message: 'Welcome to the page!'});
});

// Get all cars
app.get('/cars', async function(req, res, next) {
    const rows = await carService.getAll(req.query.page);
    res.json({data: rows.data[0]});
});


// Save car data
app.post('/car', async function(req, res, next) {
    const name = req.body.name;
    const modelNumber = req.body.modelNumber;
    const price = req.body.price;

    const result = await carService.insert(name, modelNumber, price);
    res.json({message: result});
});

// listen port 3000
app.listen(config.PORT, function () {
    console.log(`Node app is running on port ${config.PORT}`);
});

module.exports = app;