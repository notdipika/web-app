// Copy an object using the spread operator and modify one property.

let object =
{
    Name:"Dipika",
    Age:21,
    City:"Dharan"
}

let newObject = 
{
    ...object,
    Gender:"Female"
}

console.log("Original Object: ", object);
console.log("New Object: ", newObject);