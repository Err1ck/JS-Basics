/*

# Exercise 28

Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:
0
1
2
3
4
5
6
7
8
9
10
55

*/
let sum=0;
for(let i=0; i<=10;i++){
    sum=sum+i;
    console.log(i);
}
console.log(sum);