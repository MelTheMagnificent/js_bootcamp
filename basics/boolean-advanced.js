let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

//challenge area 

let temp = 100

//it is freezing outside
//it is hot outside
//go for it. it is pretty nice

if (temp<=32){
    console.log('It is freezing outside!')
} else if (temp>=95) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it! It is pretty nice outside!')
}
