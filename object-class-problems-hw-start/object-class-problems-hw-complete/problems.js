/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: 'Apple Mac',
  model: 'MacBook Air',
  ram: 8,
  storage: 500,
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
  name: 'Jam Shed',
  grape: 'Shiraz',
  vintage: 2019,
  volume: 750,
  amountRemaining: 750,
  drink(amount) {
    this.amountRemaining -= amount
  },
  refill(amount) {
    this.amountRemaining += amount
  },
}

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
  }
}

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
  constructor() {
    this.contents = []
  }

  addItem(item) {
    this.contents.push(item)
  }

  removeItem(item) {
    this.contents = this.contents.filter((content) => content !== item)
  }

  empty() {
    this.contents = []
  }

  getTotal() {
    return this.contents.reduce((total, item) => total + item.price, 0)
  }
}

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height
  }
}

/*
Write a Square class that extends the Shape class above. It should have the same properties and methods as the Shape class, but only take a width when being instantiated. The height should be automatically set to be equal to the width.
*/

class Square extends Shape {
  constructor(width) {
    super(width, width)
  }
}

/*
Write a Tringle class that extends the Shape class above. It should have the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the triangle
getPerimeter() - calculates the perimeter of the triangle (assuming it's right-angled, so width + height + √width + √height)
*/

class Triangle extends Shape {
  getArea() {
    return this.width * (this.height / 2)
  }

  getPerimeter() {
    return (
      this.width + this.height + Math.sqrt(this.width) + Math.sqrt(this.height)
    )
  }
}

// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape,
  Square,
  Triangle,
}
