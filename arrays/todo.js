// create an array with five todos
// You have x todos
// print the first and second to last items -> todo: walk the dog

const todos = ["walk the dog", "do the dishes", "study", "nap", "journal"]

// delete the 3rd item
todos.splice(2, 1)
// add a new item onto the end
todos.push('Clean room')
// remove the first item from the list
todos.shift()

console.log("You have " + todos.length + " to dos")
//'You have ${todos.length} todos!'

todos.forEach(function(todos, index) {
    const count = index + 1 
    console.log(`${count}. ${todos}`)
})

// for (count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }

//console.log("To do:" + todos[0], todos[todos.length-2])
//'Todo: ${todos[0]}
//'Todo: $[todos[todos.length -2]]