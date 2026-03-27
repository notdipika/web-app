// Create an arrow function that returns an object and use template 
// literals to print:    Hello, my name is ___ and I am ___ years old. 

let object =
{
    name:"Dipika",
    age:21
}

const func =()=>
{
    return object
}

const sen = func();
console.log(`Hello, my name is ${sen.name} and I am ${sen.age} years old.`);