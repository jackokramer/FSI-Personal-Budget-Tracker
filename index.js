let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

//window.prompt(weeklyExpenseQuestions[0])


// Your Code Here
function getWeeklyExpenses(){
for(let x=0; x<weeklyExpenseQuestions.length; x++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[x]))
    weeklyExpenses += answer
}
}

getWeeklyExpenses()

function getMonthlyExpenses(){
for(let z = 0;  z<monthlyExpenseQuestions.length; z++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[z]))
    monthlyExpenses +=  answer
}
}

getMonthlyExpenses()

const getAnnualExpenses= () =>{
for(let y = 0; y<annualExpenseQuestions.length; y++) {
    let answer =  parseFloat(window.prompt(annualExpenseQuestions[y]))
    annualExpenses += answer
}
}

getAnnualExpenses()
