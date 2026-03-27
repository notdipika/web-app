// Sort an array of objects based on age or marks.

let students = [
    {
        name: "Dipika",
        age: 21,
        marks: 85
    },
    {
        name:"Karuna",
        age: 22,
        marks: 90
    },
    {
        name:"Aarju",
        age: 20,
        marks: 80
    },
    {
        name:"Nabin",
        age: 23,
        marks: 88
    }
]

const sorteddata = students.sort((a,b) => a.age - b.age);
console.log("Sorted by age: ", sorteddata);