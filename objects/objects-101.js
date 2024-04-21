let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// challenge area

// name, age, location

// Andrew is 27 and lives in Philadelphia.
// Increase age by 1 and print message again
let person = {
    name: 'Mel',
    age: 21,
    location: 'Phoenix'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 2

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
