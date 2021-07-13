// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {
    const button = document.querySelectorAll('.option');
    const playerCurrent = document.querySelector('#current')
    const computerCurrent = document.querySelector('#computerCurrent')
    const computerOptions = ['Rock', 'Paper', 'Scissors']
    const resetButton = document.querySelector('#reset')
    const gameResult = document.querySelector('#result')
    const background = document.querySelector('body')



    //player's choice
    const playerSelect = (e) => {
        const playerChoice = e.target.innerHTML;
        playerCurrent.textContent = playerChoice;
        console.log(`Player picks ${playerChoice}`);
        
    } 
 // Computer's choice 
 const computerSelect = (e) => {
    // console.log(e.target);
     const randomElement = computerOptions[Math.floor(Math.random() * computerOptions.length)];
     computerCurrent.textContent = randomElement;
     console.log(`Computer picks ${randomElement}`);
     //   computerCurrent.textContent = e.target.innerHTML;
   } 

   const resetChoices = (e) => {
        const resetButton = e.target.innerHTML;
        playerCurrent.textContent = '';
        gameResult.textContent = '';
        computerCurrent.textContent = ''
        background.classList = "";
        console.log(`reset`);
        
    } 

    button.forEach((btn) =>
    btn.addEventListener("click", playerSelect)
  );

button.forEach((btn) =>
btn.addEventListener("click", computerSelect)
);

button.forEach((btn) =>
btn.addEventListener("click", result)
);

resetButton.addEventListener('click', resetChoices);


 // result
function result() {
    const playerResult = playerCurrent.textContent
    const computerResult = computerCurrent.textContent

    if (playerResult === 'Rock') {
         if (computerResult === 'Rock'){
        console.log('draw')
        gameResult.textContent = "It's a draw!"
        background.classList = "";
        background.classList.add('draw')
     } else if (computerResult === 'Paper'){
         console.log('computer wins')
         gameResult.textContent = "The computer wins!"
         background.classList = "";
         background.classList.add('player-lose')
     } else {
         console.log('player wins')
         gameResult.textContent = "The player wins!"
         background.classList = "";
         background.classList.add('player-win')
     }
}
if (playerResult === 'Paper') {
    if (computerResult === 'Rock'){
   console.log('player wins')
   gameResult.textContent = "The player wins!"
   background.classList = "";
   background.classList.add('player-win')
} else if (computerResult === 'Paper'){
    console.log('draw')
    gameResult.textContent = "It's a draw!"
    background.classList = "";
    background.classList.add('draw')
} else {
    console.log('computer wins')
    gameResult.textContent = "The computer wins!"
    background.classList = "";
    background.classList.add('player-lose')
}
}
if (playerResult === 'Scissors') {
    if (computerResult === 'Rock'){
   console.log('computer wins')
   gameResult.textContent = "The computer wins!"
   background.classList = "";
   background.classList.add('player-lose')
} else if (computerResult === 'Paper'){
    console.log('player wins')
    gameResult.textContent = "The player wins!"
    background.classList = "";
    background.classList.add('player-win')
} else {
    console.log('draw')
    gameResult.textContent = "It's a draw!"
    background.classList = "";
    background.classList.add('draw')
}
}
}

button.forEach((btn) =>
btn.addEventListener("click", result)
);

}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)
