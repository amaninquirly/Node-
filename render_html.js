var http = require('http');
var fs = require('fs');
function onRequest(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    //res.write('Respone from Node Server')
    fs.readFile('./index.html','utf8',function(err,data){
        console.log("data",data)
        if(err){
            res.writeHead(404);
            res.write('File not Found');
        }else{
            res.write(data)
        }
        res.end()
    })
    
}

http.createServer(onRequest).listen(8000)