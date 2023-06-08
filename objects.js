const student = {
    firstName: 'Lorenzo',
    lastName: 'Mokwa',
    age: 19,
    student: true,

}

console.log(student.firstName)
console.log(student)


// lets get more advanced

// creating an object from separate variables:

const make = 'Audi'
const model = 'A3'
const year = 2018

const myCar = { make, model , year } // assembled 3 variables into a single object 

// Frequently, we have an object and we want to break it into separate variables

// *** This is called "destructuring" ***

const movie = {
    title: 'Fight Club' ,
    writer: 'Ur mama' ,
    year: 1999,
    genre: 'Action' ,

}

// lame way

// const title = movie.title
// const writer = movie.writer
// const genre = movie.genre

// or we can be awesome and write:

const {title, writer, genre} = movie


console.log(title)



