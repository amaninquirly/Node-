var request = require('request');
request('http://www.google.com',function(err,body){
    if(!err){
        console.log(body);
    }
})