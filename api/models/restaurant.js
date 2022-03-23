const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    calories: Number,
});

const restaurantSchema = mongoose.Schema({
    name: String,
    geometry: {
        latitude: Number,
        longitude: Number,
    },
    menu: [foodSchema],
});

module.exports = mongoose.model('restaurant', restaurantSchema);