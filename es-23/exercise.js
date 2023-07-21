/*
# Exercise 23

Print in the console the price of the room according to the following scheme:

* Prince for Basic Room --> 50€
* Price for Junior Suite Room --> 80€
* Price for Master Suite  --> 100€

Use the Switch statement.
*/

let priceRoom="BR";

switch(priceRoom){
    case "BR":
        console.log("Prince for Basic Room --> 50€") ;
        break;
    case "JSR":
        console.log("Price for Junior Suite Room --> 80€") ;
        break;
    case "MS":
        console.log("Price for Master Suite  --> 100€") ;
        break;
    default:
        console.log("None of the options have been chosen");
        break;
}