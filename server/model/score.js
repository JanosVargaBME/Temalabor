const Schema = require('mongoose').Schema;
const db = require('../db');
var mongoose = require('mongoose');

const ScoreSCH = new Schema({
    date: Date,
    score: Number,
    time: Number,
    _player:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

var scoreModel = mongoose.model('Score', ScoreSCH);

module.exports = scoreModel;