var express = require("express")
var app = express();
app.get('/',function(req,res){
    res.send("this is response ")
})
app.listen(1024);
console.log("here server is running");