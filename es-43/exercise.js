/*
# Exercise 43

Do you know any other way to copy the `user` object without changing its properties?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
*/

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = Object.assign({},user);

newUser.name="Paolo"

console.log(newUser);
console.log(user);
