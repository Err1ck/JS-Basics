/*
# Array Methods - Exercise 55

Create a function called `ageAverage` that takes in an array of people and returns the average age.
*/



function calculateAverageAge(persons){
  let x = persons.reduce((name, age) => name + age.age,0,);
  let avgAge = x / persons.length;
  return Math.round(avgAge);
}
/*
function calculateAverageAge(persons) {
  let avgAge=0
  for(let i=0;i<persons.length;i++){
    x=persons[i].age;
    avgAge=avgAge+x;
  }
  avgAge=avgAge/persons.length;
  Math.round(avgAge);
  return Math.round(avgAge);
}
*/

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);