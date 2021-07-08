/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: 'dell',
  model: 'E54',
  ram: 8,
  storage: 200


}

/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
  name: 'jameswine',
  grape: 'merlot',
  vintage: 1920,
  volume: 500,
  amountRemaining: 500,
  drink(amount) {
    this.amountRemaining -= amount
    this.logDrink(amount)
  },
  refill(amount){
    this.amountRemaining += amount
    this.logRefill(amount)
  },
  logDrink(amount) {
    console.log(`You just drank ${amount} so now there is ${this.amountRemaining} left of the ${this.name}`)
  },
  logRefill(amount) {
    console.log(`You just refilled ${amount} so now there is ${this.amountRemaining} left of the ${this.name}`)
  }

}
//wineBottle.drink(50)
//wineBottle.refill(80)
/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
  }
  sell() {
    console.log(`The ${this.name} has been sold for £${this.price}`)
  }
}

const bike = new Product('Bike', 'Red raleigh bike', '99.99')

bike.sell()

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

 class Cart {
//   constructor(contents){
//     this.contents = []
//     this.price = []
//   }
//   addItem(item){
//     this.contents.push(item)
//   }
//   removeItem(itemToRemove) {
//     this.contents = this.contents.filter(item => item !== itemToRemove)
//   }
//   update() {
//     console.log(`The cart consists of ${this.contents}`)
//   }

 }

// const sausages = new

// addItem('sausages')

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

//assuming it's a 4 sided shape?

class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  getArea() {
    const area = this.width * this.height
    console.log(`The area is ${area}`)
  }

  getPerimeter() {
    const perimeter = (2 * this.width) + (2 * this.height)
    console.log(`The perimeter is ${perimeter}`)
  }

}

const shape1 = new Shape(4, 5)
shape1.getArea()
shape1.getPerimeter()


// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}
