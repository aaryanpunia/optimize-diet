const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const restaurants = require('../models/restaurants');
const KcalCombo = require('../utils/KcalCombo');

app.get('/:restaurantName', async (req, res) => {
    nResto = restaurants.findOne({ name: req.params.restaurantName }).exec(function (err, result) {
        if (result == null) {
            res.send("Not a valid Name");
        } else {
            res.json(result);
        }
    })
}
);

app.get('/:restaurantName/calories/:calories/comboSize/:comboSize/range/:range', (req, res) => {
    nResto = restaurants.findOne({ name: req.params.restaurantName }).exec(function (err, result) {
        if (result == null) {
            res.send("Not a valid Name");
        } else {
            const combo = KcalCombo(result['menu'], req.params.calories, req.params.comboSize, 10, req.params.range);
            res.json(combo);
        }
    })
});

module.exports = app;


