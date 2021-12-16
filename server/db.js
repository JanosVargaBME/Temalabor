var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Pacman', {useNewUrlParser: true}, (err)=> {});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = require('./model/user');
var scores = require('./model/score');
var monsters = require('./model/monster');

module.exports = db;