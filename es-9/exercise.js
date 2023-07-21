/*
# Exercise 9

* Try to predict the output of the comparisons before printing them in the console

*/

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname;
age <= average;
firstYearCompleted == lastname;
yearsCompleted == firstYearCompleted;
firstYearCompleted === yearsCompleted;
examsCompleted < age;
isGraduated > yearsCompleted;

console.log(name == lastname);                          //False
console.log(age <= average);                            //True
console.log(firstYearCompleted == lastname);            //False
console.log(yearsCompleted == firstYearCompleted);      //True
console.log(firstYearCompleted === yearsCompleted);     //False
console.log(examsCompleted < age);                      //True
console.log(isGraduated > yearsCompleted);              //False