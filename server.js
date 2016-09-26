var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser')
app.use(express.static(__dirname + "/ppp"));
app.use(bodyParser.json());

app.get('/contactList',function(req,res){
    db.contactlist.find(function(err,docs){
        res.json(docs);
    });
});

app.post('/contactList',function(req,res){
    db.contactlist.insert(req.body,function(err,docs){
        res.json(docs);
    })
});

app.delete('/contactList/:id',function(req,res){
    var id = req.params.id;
    db.contactlist.remove({_id: mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);
    })
    //console.log(id);
});
app.get('/contactlist/:id',function(req,res){
    var id = req.params.id;
    db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);
    })
});
app.put('/contactlist/:id',function(req,res){
    var id = req.params.id;
    var name = req.body.name;
    console.log(name);
    db.contactlist.findAndModify({
    query: {_id:mongojs.ObjectId(id)},
    update: {$set:{name:req.body.name, email: req.body.email, number: req.body.number}},
    new: true},function(err,docs){
        res.json(docs); 
        console.log(docs);
    })
});
app.listen(1024);
console.log("server is running");