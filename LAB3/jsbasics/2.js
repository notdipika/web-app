// Write a program to calculate the factorial of a number using: 
// a. for loop 
// b. while loop

// a. using for loop
let n=7;
let fact = 1;
let i =1;
for (i=1; i<=n; i++)
{
    fact = fact *i;
}
console.log("The factorial of ", n, " is: ", fact);

// b. using while loop
while(i<=n)
{
    fact = fact *i;
    i++;
}
console.log("The factorial of ", n, " is: ", fact);