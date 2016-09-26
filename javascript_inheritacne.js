
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

var st = "css/color"
var f = st.split('/');
console.log(f);
newDir = "tmp/"
for(var i=0; i< f.length; i++){
    console.log(f[i]);
    newDir += f[i] + '/';
    console.log(newDir);
}