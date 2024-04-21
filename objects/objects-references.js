let myAccount = {
    name: 'Mel',
    expenses: 0,
    income: 0
}
//let otherAccount = myAccount
//otherAccount.income = 1000
let addExpense = function (account, amount) {

//    account = {}
    account.expenses = account.expenses + amount
    console.log(account)
}

// addIncome - take the account to manipulate and take the amount of income we add

let addIncome = function (account, amount) {

    account.income = account.income + amount
    console.log(account)
}

// resetAccount - which account to change, change to zero

let resetAccount = function (account) {

    account.expenses = 0, account.income = 0
    console.log(myAccount)
}

// getAccountSummary - prints a summary of the account including the balance, expenses, and income

let getAccountSummary = function (account) {

    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`)
    console.log(myAccount)
}
// Account for Mel has $900. $100 in income. $100 in expenses.

// addIncome
// addExpense
// AddExpense
// getAccountSummary
// resetAccount
// getAccountSummary

addIncome(myAccount, 100)
addExpense (myAccount, 20)
addExpense (myAccount, 20)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
