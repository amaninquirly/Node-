//function expreesion turorial from .net jinja 
//function is reusable code which call be anywhere in program 
//function allows a programmer to write big program into small and managebale function. 

function CalanotherFunction(fun){
    //fun();
    setTimeout(fun,2000);
}

var sayBye = function(){
    console.log("Good bye to Ankesh");
}

CalanotherFunction(sayBye);