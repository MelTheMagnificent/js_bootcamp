// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log("Welcome user")
}

greetUser()

let square = function (num) {
    let result = num * num

    return result // can only be used a single time
}

let value = square(3)
console.log(value)

// Challenge area

// convertFahrenheitToCelsius

// 32 to 0 orr 60 to 20

// print the converted values

// let celsius = (fahrenheit - 32 ) * ( 5 / 9)

let converter = function (fahrenheit) {
    let celsiusResult = (fahrenheit - 32) * (5/9)

    return celsiusResult
}

console.log(converter(32))
console.log(converter(68))
