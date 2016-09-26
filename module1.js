function myFunction(){
    console.log("Log from other file");
}

myString = "this is my string";

module.exports.myFunction = myFunction;
module.exports.myString = myString;