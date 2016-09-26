console.log(__filename);

console.log(__dirname);


function printName(name){
    console.log(name);
}

setTimeout(printName("aman"),4000);

//setInterval(printName("Arnav"),3000);

//call back function 


function add(a,b){
    return a+b ;

}

function multipuly(a,b){
    return a*b ;
}

function cal(num1,num2,callback){

    if(typeof(callback) === "function"){
        return callback(num1,num2);
    }
    else{
        console.log("wrong parameters");
    }
}

console.log(cal(4,5,add));


