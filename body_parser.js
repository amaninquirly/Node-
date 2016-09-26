var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/',function(req,res){
     var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
	res.send(html);	
 });
app.post('/',function(req,res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
               '<a href="/">Try again.</a>';
  res.send(html);

})


app.listen(1024);
