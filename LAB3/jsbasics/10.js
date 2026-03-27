// Remove duplicate elements from an array.

const arr = [1, 2, 3, 4, 5, 2, 3, 6];

let newArr= [];

arr.forEach((num) =>
{
    let flag = 0;
    newArr.forEach((num2) =>
    {
        if (num === num2)
        {
            flag = 1;
        }
    })
    if (flag === 0)
    {
        newArr.push(num);
    }   
})

console.log("Original Array: ", arr);
console.log("New Array: ", newArr);

//Alternate
let uniquevalues=new Set(arr)
console.log(uniquevalues)