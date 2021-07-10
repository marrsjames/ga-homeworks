/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter(function(item){ 
    return typeof item == "string" || (typeof item == "number" && item);
            /** Any string**/        /** Numbers without NaN & 0 **/
 });
}



//console.log(removeBlank([0, false, [], undefined, {}, NaN, 'Kevin']))

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randElNumber = getRandomInt(array.length);

  return array[randElNumber]
}

//console.log(randomElement([1,"elephant", "apple", 67]))

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const sortedArray = array.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
}) //Array now becomes [7, 8, 25, 41]
  const secondHighSecondLow = [sortedArray[1], sortedArray[array.length-2]]
  return secondHighSecondLow
}

//console.log(secondLowestSecondHighest([1,2,3,4,5,6,7,8,9,10])) 

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {

}

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  fibArray =[]
  fibArray[0] = 0
  fibArray[1] = 1

  for (let i = 2; i <=n; i++) {
    let fibn = fibArray[i-1] + fibArray[i-2]
    fibArray[i] = fibn
  }
  console.log(fibArray)
}

fibonacci(4)

module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci
}
