// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

const initial = window.prompt("Would you like to use the standard calculator (type 'standard'), mortgage calculator (type 'mortgage'), BMI (type 'bmi') or trip (type 'trip')?")

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
} else if (initial === 'bmi'){

  let bmi = true

  while (bmi) {

    const units = window.prompt("imperial or metric?")

    if (units === 'imperial') {
      const weight = parseFloat(window.prompt('what is the mass (in pounds)?'))
      const height = parseFloat(window.prompt('what is the height (in inches)?'))      

      const BMI = ((weight)/(height * height))*703;
      window.alert('BMI is ' + BMI);      

    } else if (units === 'metric'){
      const weight = parseFloat(window.prompt('what is the mass (in kilograms)?'))
      const height = parseFloat(window.prompt('what is the height (in metres)?'))      

      const BMI = ((weight)/(height * height));
      window.alert('BMI is ' + BMI);      

    }
  
  }

} else if (initial === 'trip') {
 
  const distance = parseFloat(window.prompt('What is the distance (miles)?'))
  let mpg = parseFloat(window.prompt('what is the fuel efficiency (mpg)?'))
  const cpg = parseFloat(window.prompt('What is the cost per gallon?'))   
  const speed = parseFloat(window.prompt('What is the speed (mph)?'))  

  let tripTime = distance / speed;
  tripTime = Math.round((tripTime + Number.EPSILON) * 100) / 100

  if (speed > 60){
    mpg = mpg - (2* (speed - 60));

  }
  if (mpg < 1) {
    mpg = 1;
  }

  window.alert('mpg is' + mpg);  
  let totalCost = (distance / mpg) * cpg; 
  totalCost = Math.round((totalCost + Number.EPSILON) * 100) / 100


  window.alert('Your trip will take ' + tripTime + ' hours and cost £' + totalCost + '.');     
}





console.log('Thank you, goodbye')
