/*
# Exercise 10

* Explain the difference between the double and the triple equals operator.

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted
*/

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted;
yearsCompleted === firstYearCompleted;

console.log(yearsCompleted == firstYearCompleted);      // 1=true and true=1
console.log(yearsCompleted === firstYearCompleted);     // 1=true and 1=Number || true=1 and true=Boolean ==> needs both equal to be true;