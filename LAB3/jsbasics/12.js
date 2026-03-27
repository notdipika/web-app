// Loop through object properties using for...in


let students = [
    {
        name: "Dipika",
        age: 21,
        marks: 85
    }
]

console.log("Student Details:");
for(let value in students)
{
    console.log(value, ":", students[value]);
}