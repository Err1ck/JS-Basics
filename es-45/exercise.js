/*
# Exercise 45

Create a constructor function called `Smartphone` that takes in 3 parameters: `brand`,`name`, `price`. 
To create an object from a constructor function, we use the `new` keyword. 
Create two different objects.
*/
function Smartphone(a1,b1,c1) {
    const newObject = new Object();
    newObject.Brand=a1;
    newObject.Name=b1;
    newObject.Price=c1;

    return newObject;
}
console.log(Smartphone("Apple","iPhone",1200));
console.log(Smartphone("Samsung","Galaxy",700));
