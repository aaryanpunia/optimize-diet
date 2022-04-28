const mongoose = require('mongoose');

// const foodSchema = mongoose.Schema({
//     name: String,
//     price: String,
//     desc: String,
// });

const restaurantsSchema = mongoose.Schema({
    name: String,
    menu: [],
    public_img_id: [],
    avg_kcal: Number,
    avg_price: Number,
});

module.exports = mongoose.model('restaurants', restaurantsSchema);