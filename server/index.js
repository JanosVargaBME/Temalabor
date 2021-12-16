const express = require('express');
const app = express();
const fs = require("fs");

var db2 = require('./db');

var bodyParser = require('body-parser'); // npm i body-parser

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Pacman', {useNewUrlParser: true}, (err)=> {});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/listScores', function (req, res) {
    var scores = db.collection('scores');

    scores.find().toArray(function (err,result){
        if(err){
            res.status(400).send("Error fetching listings!");
        }
        else{
            res.json(result);
        }
    });
})

app.get('/listUsers', function (req, res) {
    var users = db.collection('users');

    users.find().toArray(function (err,result){
        if(err){
            res.status(400).send("Error fetching listings!");
        }
        else{
            res.json(result);
        }
    });
})

app.post('/regUser', function(req, res, next){
    var users = db.collection('users');

    console.log("REG USER")
    users.insertOne({
        "name": req.body.userRegName,
        "email": req.body.userRegEmail,
        "password": req.body.userRegPassword
    });
    res.redirect('/');
})

app.put('/updateUser', function(req, res){
    var users = db.collection('users');
    users.insertOne({
        "name": req.body.userRegName,
        "email": req.body.userRegEmail,
        "password": req.body.userRegPassword
    });
    res.redirect('/');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})