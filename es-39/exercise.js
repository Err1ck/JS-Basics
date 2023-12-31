/*
# Exercise Closures

Write a new `closure`: create a function called `multiplyByTwo` that takes is one parameter.

Inside the `multiplyByTwo` function, create a function called `inner`.

This function will take care of multiplying the parameter passed as input and multiply it by the variable named `number`
Print in the console the function output.

Example: `multiplyByTwo(4)()`, result: `8`

Tips:

- You can learn more about the topic with this article: https://www.freecodecamp.org/news/closures-in-javascript/
*/

let a;
function multiplyByTwo(a1){
  a=inner(a1);
  function inner(b2){
    number=2;
    return number*b2;
  }
  return a;
}

console.log(multiplyByTwo(4));