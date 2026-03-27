// Show the difference between var, let and const inside a loop.

// var
for (var i=0; i<5; i++)
{
    console.log("Using var: ", i);
}
console.log("Value of i after the loop using var: ", i); //Accessible, reassigned and redeclared

// let
for (let j=0; j<5; j++)
{
    console.log("Using let: ", j);
}
// console.log("Value of j after the loop using let: ", j); //Inaccesible 

// const
const arr = [1,2,3,4,5];
arr.forEach((num) =>
{
    console.log("Using const: ", num);
})