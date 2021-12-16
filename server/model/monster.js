const Schema = require('mongoose').Schema;
const db = require('../db');
var mongoose = require('mongoose');

const MonsterSCH = new Schema({
    image: String,
    color: String,
    life: Number
});

var monsterModel = mongoose.model('Monster', MonsterSCH);

module.exports = monsterModel;