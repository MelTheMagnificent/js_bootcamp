let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {


    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    console.log(`${book.title} by ${book.author}`)

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area
// create function - take fahrenheit in - return object with all three
/* 
let fahrenheit = 32 //0c - 273.15k

let celsius = (fahrenheit - 32 ) * ( 5 / 9)

let kelvin = celsius + 273.15
*/


let tempConverter = function (fahrenheit) {

    let celsius = (fahrenheit - 32) * (5/9)

    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: (celsius + 273.15)
    }

}

let tempSummary = tempConverter(32)

console.log(tempSummary)