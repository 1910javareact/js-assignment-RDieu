/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objs = [
    {name: 'Paul',          age:35},
    {name: 'Michelle',      age:19},
    {name: 'Jasmine',       age:75},
    {name: 'Peter',         age:45},
    {name: 'Carlos',        age:22},
    {name: 'Natasha',       age:29},
    {name: 'Lizzo',         age:25}
]

let filteredObj = objs.filter((obj)=> {
    return obj.age >= 25
})

console.log(objs)
console.log(filteredObj)