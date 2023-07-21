/*
# Exercise 20

Create a variable called `primitive` and assign it a value. 
Check if the value is number, string or boolean type and print it in the console.

*/
let primitive=true;

if(primitive !== null && typeof(primitive) !== "undefined"){

    if(typeof(primitive) === "number"){
        console.log("Value is Number");
    }
    else if(typeof(primitive) === "string"){
        console.log("Value is String");
    }
    else{
        console.log("Value is Boolean");
    }
}
else if(primitive !== null){
    console.log("Value is undefined");
}
else{
    console.log("Value is null");
}

