let num = 103.941

console.log(num.toFixed(2)) // parameter is how many digits you wann akeep


console.log(Math.round(num))
console.log(Math.floor(num)) //round down
console.log(Math.ceil(num)) //round up

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)