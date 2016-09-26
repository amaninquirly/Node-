var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");
var Schema = mongoose.Schema;

var userSchema = new Schema({
   name: String,
   password: Number
});

var User = mongoose.model('User',userSchema);

var aman = new User({
    name: "Aman kumar Sharma",
    password: 123456
});

aman.save(function(err){
   
    if(err) throw err;
})

User.find({name:"Aman kumar Sharma"},function(err,users){
    if(err) throw err;
    //object of all users 
    console.log("users",users[0 ]);
})



//console.log(mongoose);