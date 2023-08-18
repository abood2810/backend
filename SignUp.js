var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); var app = express();
var mongoose = require('mongoose'); mongoose.connect('mongodb://localhost/test');

var publicFolder = path.join(__dirname, 'public');

app.use(express.static (publicFolder));
app.use(bodyParser.urlencoded({ extended: true }))



app.get('', (req, res) =>{
    res.render(publicFolder + '/log.html');
})

app.post('/user', (req, res) =>{
                                        //id of input           //id of input
    var user = new sign({email: req.body.email, password: req.body.pass,phonenumber:req.body.num});

    user.save().then(newUser => {
        res.send("creaetd new user successfully!");
    }).catch(err => {
        res.send("something went wrong!");
    })
})

