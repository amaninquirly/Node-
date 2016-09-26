// the console.log() method is used to print stdout with newline.
// it can take multipule argument as example:
var my_name = "Aman";
var my_class = 12;
var fav_subject = {
    subj1:"English",
    subj2:"Math"
}
console.log("My name is %s " + '\n' + "my class is %d " + '\n' + "my fav_subject are %j  and  %j ",my_name,my_class,fav_subject.subj1,fav_subject.subj2);
// converts string first charactor in UpperCase 

inptstrng = "input strng";
optsting = inptstrng.charAt(0).toUpperCase()+inptstrng.slice(1).replace(" ","");
console.log(optsting); 

//to remove whitespace from string inside we can use 
//string.replace(" ", "");
// as well as 
// string.replace(/\s/g, '')


//setTimeout(sb,cs) is used to run callback afeter millisecond that we are passing inside function 
// exmaple is listed below 

function callTimeout(){
    console.log("here we are calling callTimeout function after 2ms");
}

// The clearTimeout(t) global function is used to stop a timer that was previously created.  
//var t = setTimeout(callTimeout,3000);
//console.log(t);
//clearTimeout(t);

 //setInterval() function is used to run callback repeatdely after mention time 
var timer = 0 ;
var t =setInterval(function callTimeout(){
    timer += 2; 
    console.log( timer + "here we are calling callTimeout function after 2ms");
    if(timer> 5){
    console.log("inside t");
    clearTimeout(t);
}

},2000) 

//read the content of directory 

var fs = require('fs');
var path = "/home/aman/OFFICE"
console.log(path);
fs.readdir(path,function(err,items){
    if (err) throw err;
    else{
        console.log("inside else");
        console.log(items);
    }
});



//file system have to complete today before 12 pm ..
