var fs = require('fs');
console.log("Before reading the file");
/*fs.readFile('./f.txt','utf8',function(err,data){
    console.log(data);
});*/


//read file syncronously 

var data = fs.readFileSync('./f.txt','utf8');
console.log(data);
console.log("after execution");



fs.writeFile('./f2.text',"this is the new text written ",'utf8',function(err){
    if(err) throw err;
    console.log("here write file");
})

console.log("After writing the file");

fs.writeFile('message.txt',"this is content", 'utf8',function(err){ if (err) throw err })