const Schema = require('mongoose').Schema;
const db = require('../db');
var mongoose = require('mongoose');

const MapSCH = new Schema({
    skin: String
});

var MapModel = mongoose.model('Map', MapSCH);

module.exports = MapModel;