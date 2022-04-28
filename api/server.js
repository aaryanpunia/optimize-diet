const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//config Dotenv
dotenv.config()

//Connect to MongoDB
mongoose.connect(process.env.DB_KEY, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected to MongoDB");
})
//Import routes
const resto = require('./routes/resto');

const app = express();
const port = 3000

// Parsing middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(port);


//Configure routes
app.use('/restaurant', resto);
