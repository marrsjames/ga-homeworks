// This is a class
class OpenSourceVegetableFeed {
  // Classes always have constructors
  constructor(name, moves, maxTastePoints) {
    this.name = name
    this.moves = moves
    this.tastePoints = maxTastePoints
    this.maxTastePoints = maxTastePoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.tastePoints <= 0
  }
  toString() {
    return `${this.name} (${this.tastePoints}/${this.maxTastePoints})`
  }
  takeDamage(feed) {
    this.tastePoints -= feed
  }
  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    opponent.takeDamage(move.feed)
    console.log(opponent.toString())
  }
}

// We can extend OpenSourceVegetableFeed with a specific species
class Carrot extends OpenSourceVegetableFeed {
  constructor(moves, maxTastePoints) {
    super('Carrot', moves, maxTastePoints)
  }
}

const myOsvf = new Carrot(
  [
    { name: 'Cake', feed: 25 },
    { name: 'Boiled', feed: 15 },
    { name: 'Wedged', feed: 23 },
  ],
  50
)
// or we can use the main class
const theirOsvf = new OpenSourceVegetableFeed(
  'Mushroom',
  [
    { name: 'Rissotto', feed: 20 },
    { name: 'Burger', feed: 35 },
    { name: 'Truffle', feed: 5 },
  ],
  60
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(' Your Osvf '.padStart(20, '=').padEnd(40, '='))
console.log(myOsvf)
console.log(' Their Osvf '.padStart(20, '=').padEnd(40, '='))
console.log(theirOsvf)

function promptUserForMove() {
  rl.question(
    `How would you like your ${myOsvf.name} fed to ${
      theirOsvf.name
    }?
Options are:
  ${myOsvf.moves.map(({ name }, i) => i + '. ' + name).join('\n  ')}
Indicate 0-${myOsvf.moves.length - 1}.
> `,
    function (index) {
      // The user has chosen a move — we'll now perform that move.
      myOsvf.useMoveAgainstOpponent(index, theirOsvf)

      if (theirOsvf.isFainted()) {
        // If the opponent has fainted, we win
        console.log(
          `You sufficiently delighted the opponent ${OpenSourceVegetableFeed.name}!`
        )
        return
      } else {
        // If the opponent hasn't fainted, they can now move
        executeRandomOpponentMove()
      }

      if (myOsvf.isFainted()) {
        // If we have fainted, it's game over
        console.log(
          `Your opponent inflicted lasting delight on your ${OpenSourceVegetableFeed.name}!`
        )
        console.log(`Please take your ${myOsvf.name} for a lie down.`)
      } else {
        // After the opponent's move, we move again as long as we're not fainted
        promptUserForMove()
      }
    }
  )
}

function executeRandomOpponentMove() {
  const index = Math.floor(myOsvf.moves.length * Math.random())
  theirOsvf.useMoveAgainstOpponent(index, myOsvf)
}

promptUserForMove()
