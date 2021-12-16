const Schema = require('mongoose').Schema;
const db = require('../db');
var mongoose = require('mongoose');

const UserSCH = new Schema({
    name: String,
    email: String,
    password: String
});

var userModel = mongoose.model('User', UserSCH)

module.exports = userModel;