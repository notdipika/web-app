// Write an arrow function to calculate the sum of all elements in an 
// array. 

const array = [1,2,3,4,5];
let sum = 0;

array.forEach((num) => 
{
    sum = sum + num;
})

console.log("The sum of the numbers in the array is: ", sum);
