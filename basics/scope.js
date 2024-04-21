// Lexical Scope (Static Scope) - one variable might not be accessible in the rest of the program
// pay attention to the code blocks (if statement, etc)

// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
    // Local Scope (varTwo)

let varOne = 'varOne'

if (true) { //always executes no matter what
    console.log(varOne)
    let varTwo = 'varTwo'
} //varTwo is not in scope outside of the if statement

console.log(varTwo)