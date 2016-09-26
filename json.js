var foo = {
a: 1,
b: 'a string',
c: true
};

var JsonString = JSON.stringify(foo);
console.log(JsonString);
var javascriptObject = JSON.parse(JsonString)

console.log(javascriptObject["a"]);

var foo = [1, 10, 50, 200, 900, 90, 40];

var _ = require('underscore');
var result = _.filter(foo,function(item){
    return item > 100
})

console.log(result);


//java script inheritance 

var employe = function(name){
    this.name = name; 
}

employe.prototype.getName = function(){
    console.log("here emp name " + this.name);
}

var permanatemployee = function(salry){
     this.salry = salry;
}

var emp = new employe("aman")
console.log("here emp",emp);
permanatemployee.prototype =  emp;

pe = new permanatemployee(5000);
pe.getName();
//console.log(pe.getName());
