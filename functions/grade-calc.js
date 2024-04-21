// students score, total possible score (taking in)
// 15/20 - You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// call function and pass in student score then print score to screen

let gradeCalc = function (studentScore, totalPossible) {

    let grade = (studentScore / totalPossible) * 100

    if (grade >= 90) {
        console.log(`You got an A! (${grade}%)!`)
    } else if (grade <= 89 && grade >=80) {
        console.log(`You got a B! (${grade}%)!`)
    } else if (grade <= 79 && grade >=70) {
        console.log(`You got a C! (${grade}%)`)
    } else if (grade <= 69 && grade >= 60) {
        console.log(`You got a D! (${grade}%)`)
    } else if (grade <= 59) {
        console.log(`You got a F! (${grade}%)`)
    }

}

gradeCalc(20, 20)