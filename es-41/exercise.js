/*
# Exercise 41

Print the key of the `car` object.

`let car = {
  name: "Fiat",
  color: "red",
};`


**Suggestion**

Use the `for in` statement
*/

let car = {name: "Fiat",color: "red",};

for (const p in car){
    console.log(`${p}: ${car[p]}`);
}