//ARRAYS
const fruits = ['banana', 'orange', 'mango', 'lemon']

//creating static values with fill
const arr = Array()
console.log(arr)

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)
//splice() method
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


//Exercise 
const arr = Array()
const fiveElem =  Array(5)
console.log(fiveElem.length)

const mixedDataTypes = [1, 'Daniel', 'Eunice', 89, 3, [3,5,6], 'Gichuru', 'Elon']

const itCompanies = ['Facebook', 'Google', 'Microsoft','Apple', 'IBM','Oracle', 'Amazon']
//console.log(itCompanies.length)
//console.log(itCompanies[0])
//console.log(itCompanies.toUpperCase())

let companies = itCompanies.shift()
console.log(companies)