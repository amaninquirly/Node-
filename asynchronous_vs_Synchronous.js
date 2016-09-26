//synchronus means blocking.
//your code can be run because some other process prevents it.
//you procees will wait for the completion of another process and 
//your process will start to execute after the completion of the process.
//which is blocking your process.

//Asynchronus means Non Blocking .it means if any process takes long time 
//Cpu does not wait for the completio of this task .cpu will start the next execution 
//of next step and current process is also running in background.
var fs = require('fs');
var data  = fs.readFile('data.txt','utf8',function(err,file_text){
    if(err){
        return console.error(err);
    }
    console.log(file_text)    
});
callBack();
function callBack(){
    console.log("************************");
    console.log("this is a callBack function");
}

var data = fs.writeFile("new_file.txt","Hey there!",function(err){
    if(err){
        return console.error(err);
    }
    console.log("file has been saved succesfully");
});
