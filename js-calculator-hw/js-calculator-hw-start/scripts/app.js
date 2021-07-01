// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

const initial = window.prompt("Would you like to use the standard calculator (type 'standard') or mortgage calculator (type 'mortgage')?")

if (initial === 'standard') {

let calculate = true

while (calculate) {

  const operator = window.prompt('Would you like to +,-,*,/,power or square root?')

  if (operator === '+') {
    const firstNumber = parseFloat(window.prompt('What is the first number?'))
    const secondNumber = parseFloat(window.prompt('What is the second number?'))
    window.alert(firstNumber + secondNumber)
  }
  if (operator === '-') {
    const firstNumber = parseFloat(window.prompt('What is the first number?'))
    const secondNumber = parseFloat(window.prompt('What is the second number?'))
    window.alert(firstNumber - secondNumber)
  }
  if (operator === '/') {
    const firstNumber = parseFloat(window.prompt('What is the first number?'))
    const secondNumber = parseFloat(window.prompt('What is the second number?'))
    window.alert(firstNumber / secondNumber)
  }
  if (operator === '*') {
    const firstNumber = parseFloat(window.prompt('What is the first number?'))
    const secondNumber = parseFloat(window.prompt('What is the second number?'))
    window.alert(firstNumber * secondNumber)
  }
  if (operator === 'power') {
    const firstNumber = parseFloat(window.prompt('What number would you like to square?'))
    window.alert(firstNumber * firstNumber)
  }  
  if (operator === 'square root') {
    const firstNumber = parseFloat(window.prompt('What number would you like to find the square root of?'))
    window.alert(Math.sqrt(firstNumber))
  }    
  calculate = window.confirm('Would you like to go again?')
}

} else if (initial === 'mortgage') {

    let mortgagecalculate = true

while (mortgagecalculate) {

    const P = parseFloat(window.prompt('What is the principal?'))
    const r = parseFloat(window.prompt('What is the yearly interest rate?'))
    const n = parseFloat(window.prompt('What is the number of payments?'))   

    const monthlyPayment = P * (((r*(Math.pow(1+r, n)))) /((Math.pow(1+r, n)) - 1));
    window.alert('monthly payment is ' + monthlyPayment);

  calculate = window.confirm('Would you like to go again?')
}
}



console.log('Thank you, goodbye')
