const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const restaurant = require('../models/restaurant');

app.get('/:restaurantName', async (req, res) => {
    const nResto = new restaurant({ name: req.params.restaurantName });
    await nResto.save((err) => {
        if (err) {
            console.error(err);
        }
    });
    res.send(nResto);
});

module.exports = app;


