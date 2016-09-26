
//closures defination
//Whenever we have a function defined inside another function, the inner function has access to the variables declared
//in the outer function

function outerFunction(){
    var name = "Aman";
    function innerFunction(){
        var reverse_name = name.split('').reverse().join("");
        var l_name = name.charAt(0).toLowerCase() + name.slice(1);
        console.log(reverse_name);
        console.log(up_name);
    }

    innerFunction();
}

outerFunction();