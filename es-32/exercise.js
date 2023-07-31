/*
# Exercise 32

Starting from the exercise 31, we want to print the "Hello" "Name" strings after one second. 
In order to achieve this, we can use the setTimeout() JavaScript function. 
This function takes in two parameters: the first one is a function, the second one is the delay time.

function sayHelloName(call){
    console.log("Hello" );
    call();
}
function printName(){
    console.log("Erick");
}

sayHelloName(printName);

*/

function sayHelloName(call){
    setTimeout(
        function(){
            console.log("Hello");
            call();
        },
        500
    );   
}

function printName(){
    console.log("Erick");
}

sayHelloName(printName);