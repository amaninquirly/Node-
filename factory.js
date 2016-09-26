
var person =  function Person (name,age,state){
        this.name = name;
        this.age = age;
        this.state = state;   
}

var createPerson = function(fname,lname){
   return{
       firstname:fname,
       lastname:lname,
       sayHi: function(){
            console.log("person's full name"+ " " +  this.firstname + " "  + this.lastname)

        }
   }
}

var kumreshna = createPerson("kumreshna","chinna");
kumreshna.sayHi();
    
var fs = require('fs');
fs.stat('../mmmm',function(err,stats){ 
    if(!err){

      
    }else{
        
    }
})


module.exports = person;
