const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
let xPosition = 0
let yPosition = 0
let xMoveInitial = 5
let yMoveInitial = 20
let xMove = xMoveInitial
let yMove = yMoveInitial
let topPaddleX = 150
let bottomPaddleX = 100
let topPaddleDirection = 10
let bottomPaddleWidth = 50
let topPaddleWidth = 50
let playerScore = 0
let computerScore = 0
const playerCurrent = document.querySelector('#player-score')
const computerCurrent = document.querySelector('#computer-score')
playerCurrent.textContent = playerScore;
computerCurrent.textContent = computerScore;

function onkeydown(e) {
  if (e.keyCode === 39) {
    if (bottomPaddleX + 10 <=400 - bottomPaddleWidth){
       console.log(bottomPaddleX);
      bottomPaddleX = bottomPaddleX + 10;
    }
  }
  else if (e.keyCode === 37) {
    if (bottomPaddleX - 10 >=0){
    bottomPaddleX = bottomPaddleX - 10;
    }
  }
}

context.fillStyle = 'yellow'

function createPaddle() {
  context.fillRect(topPaddleX, 0, topPaddleWidth, 5)
  context.fillRect(bottomPaddleX, 295, bottomPaddleWidth, 5)
}

/////PLAYER AND MOVEMENT
setInterval(() => {

  context.clearRect(0, 0, 400, 300)
  createPaddle()
  context.fillRect(xPosition, yPosition, 20, 20)
  xPosition += xMove
  yPosition += yMove

  if (xPosition + xMove > 380 || xPosition + xMove < 0) {
    xMove = -xMove;
} 
  
  if (yPosition === 0){
    if (yPosition + yMove > 280 || yPosition + yMove < 0) {
      if (xPosition >= topPaddleX && xPosition <= topPaddleX+topPaddleWidth) {
        yMove = -yMove;
      } else {
        console.log('player scores')
        playerScore = playerScore +1;
        playerCurrent.textContent = playerScore;
      }
    }
 }
  else if (yPosition === 300){
    if (yPosition + yMove > 280 || yPosition + yMove < 0) {
      if (xPosition >= bottomPaddleX && xPosition <= bottomPaddleX+bottomPaddleWidth) {
        //console.log('hellloo bottom')
        yMove = -yMove;
      } else {
        console.log('computer scores')
        computerScore = computerScore + 1;
        computerCurrent.textContent = computerScore;
      }
    }
  }

}, 100)


//////COMPUTERMOVEMENT/////////
setInterval(() => {
//console.log('hello')

topPaddleDirectionRand = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
topPaddleX = topPaddleX + topPaddleDirection;
if (topPaddleDirectionRand === 5){
  topPaddleDirection = -topPaddleDirection;

}
console.log(topPaddleDirection)

if (topPaddleX + 10 >=400 - topPaddleWidth){
  console.log(topPaddleX);
  topPaddleDirection = -10;
} else if (topPaddleX - 10 <= 0){
  topPaddleDirection = 10;
} 
console.log(topPaddleDirection)


}, 100)


//SCORES



function reset() {
//  context.clearRect(0, 0, 400, 300)
  xPosition = 0
  yPosition = 0
  xMove = xMoveInitial
  yMove = yMoveInitial
//  context.fillRect(xPosition, yPosition, 20, 20)
}

canvas.addEventListener('click', reset)
window.addEventListener("keydown", onkeydown);