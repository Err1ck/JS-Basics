/*
# Exercise 22

Rewrite the exercise 20, by using a Switch statement.

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

*/

let primitive="p";

switch(typeof(primitive)){
    case "number":
        console.log();
        break;
    case "string":
        console.log("Value is String");
        break;
    case "boolean":
        console.log("Value is Boolean");
        break;
    case "null":
        console.log("Value is null");
        break;
    case "undefined":
        console.log("Value is undefined");
        break;
}