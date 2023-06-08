const students = ['Sam' , 'Cihan' , 'Ariana' , 'Yaslin', 'Kevin' ]

console.log(students[2]) // Ariana

console.log(students.length) // 5

students.push('Lorenzo') // push to back
students.unshift('Andrew') // brings to front

console.log(students) // ['Andrew', 'Sam' , 'Cihan', 'Ariana', 'Yaslin']

// lets create an array of objects -- something we will see very commonly

const courses = [
    { title: 'Software Engineering' , typw: "full-time" , weeks: 10} ,
    { title: 'Game Dev', type: 'part-time' , weeks: 3} ,
    { title: 'Data Analytics', type: 'part-time', weeks: 3 }
]

console.log(courses[1].title)