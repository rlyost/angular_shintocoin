// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require Mongoose
app.use(express.static( __dirname + '/dist' ));
app.use(express.static( __dirname + '/static' ));

var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "1955" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/shinto');
var ShintoSchema = new mongoose.Schema({
    your_coins: {type: Number, default: 0},
    activities: {type: Array},
    }, {timestamps: true});
mongoose.model('Shinto', ShintoSchema);
var Shinto = mongoose.model('Shinto');
// Use native promises
mongoose.Promise = global.Promise;

// Setting our Server to Listen on Port: 8055
app.listen(8055, function() {
    console.log("listening on port 8055");
});