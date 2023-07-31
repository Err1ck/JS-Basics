/*
# Exercise Closures

Starting from the previous exercise, are you able to print the value of `helloName`, after 1 second?

Tips:

- The method will help you: `setTimeout`
- You can learn more about the topic with this article: https://www.freecodecamp.org/news/closures-in-javascript/

let helloName;
const printName =()=>{
    return helloName = "Hello John"; ;
}
const inner =(call)=>{
    console.log(call(printName));
}

inner(printName);

*/

let helloName;
const printName =()=>{
    return helloName = "Hello John";   
}
const inner =(call)=>{
    setTimeout(function(){
        console.log(call(printName));
    },500)  
}

inner(printName);