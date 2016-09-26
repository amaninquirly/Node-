// what is module in node js .?
// A module can encapsulates all related code into single unit of code .
//when we creating a module this can be interperetd as moving all related function into file..
// it is set of reusable code .
//using modeul we can insert the related code whereever we want ..

//node js support two types of module :---
//1. Node.js built in modules
//2.User Defined Modules.


var check_array_length =  function checkArrayLength(arry){
    if(Array.isArray(arry)){
        return "There are " + arry.length + "element in the array";
    }else{
        console.log("it is not an array");
    }
}

var adder = function(a,b){
    console.log("the sum of two no is %d", a+b );
}

function findEvenNo(arr){
    console.log(arr);
    for(var i = 0 ;i < arr.length; i++){
        if((arr[i] % 2) == 0 ){
            console.log("here is the element that is divisible by 2 %d ", arr[i]);
        }
    }
    
}

module.exports = {
    checkArraylength: check_array_length,
    adder: adder,
    findEvenNo: findEvenNo
} 