// This is a class
class OpenSourcePocketFightingAnimal {
  // Classes always have constructors
  constructor(name, moves, maxHitPoints) {
    this.name = name
    this.moves = moves
    this.hitPoints = maxHitPoints
    this.maxHitPoints = maxHitPoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.hitPoints <= 0
  }
  toString() {
    return `${this.name} (${this.hitPoints}/${this.maxHitPoints})`
  }
  takeDamage(hit) {
    this.hitPoints -= hit
  }
  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    opponent.takeDamage(move.hit)
    console.log(opponent.toString())
  }
}

// We can extend OpenSourcePocketFightingAnimal with a specific species
class Thundermouse extends OpenSourcePocketFightingAnimal {
  constructor(moves, maxHitPoints) {
    super('Thundermouse', moves, maxHitPoints)
  }
}

const myOspfa = new Thundermouse(
  [
    { name: 'Electrocute', hit: 25 },
    { name: 'Fist assault', hit: 15 },
    { name: 'Blunt instrument', hit: 23 },
  ],
  50
)
// or we can use the main class
const theirOspfa = new OpenSourcePocketFightingAnimal(
  'Firelizard',
  [
    { name: 'Stab', hit: 20 },
    { name: 'Immolate', hit: 35 },
    { name: 'Slap', hit: 5 },
  ],
  60
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(' Your Ospfa '.padStart(20, '=').padEnd(40, '='))
console.log(myOspfa)
console.log(' Their Ospfa '.padStart(20, '=').padEnd(40, '='))
console.log(theirOspfa)

function promptUserForMove() {
  rl.question(
    `Which move would you like your ${myOspfa.name} to use against ${
      theirOspfa.name
    }?
Options are:
  ${myOspfa.moves.map(({ name }, i) => i + '. ' + name).join('\n  ')}
Indicate 0-${myOspfa.moves.length - 1}.
> `,
    function (index) {
      // The user has chosen a move — we'll now perform that move.
      myOspfa.useMoveAgainstOpponent(index, theirOspfa)

      if (theirOspfa.isFainted()) {
        // If the opponent has fainted, we win
        console.log(
          `You sufficiently injured the opponent ${OpenSourcePocketFightingAnimal.name}!`
        )
        return
      } else {
        // If the opponent hasn't fainted, they can now move
        executeRandomOpponentMove()
      }

      if (myOspfa.isFainted()) {
        // If we have fainted, it's game over
        console.log(
          `Your opponent inflicted lasting damage on your ${OpenSourcePocketFightingAnimal.name}!`
        )
        console.log(`Please take your ${myOspfa.name} to a veterinary centre.`)
      } else {
        // After the opponent's move, we move again as long as we're not fainted
        promptUserForMove()
      }
    }
  )
}

function executeRandomOpponentMove() {
  const index = Math.floor(myOspfa.moves.length * Math.random())
  theirOspfa.useMoveAgainstOpponent(index, myOspfa)
}

promptUserForMove()
