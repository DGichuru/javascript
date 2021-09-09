string.charAt(index)

let string = '30 days of Javascript'
console.log(string.charAt(0))

let lastindex = string.length - 1
//console.log(string.charAt(lastindex))

//returns the ASCII number of an index

string.charCodeAt(index)
let string = '30 days of javascript'
console.log(string.charCodeAt(3))

//concat()
let string = '30'
console.log(string.concat("Day", "of", "Javasscript"))

//indexof()
string.indexOf(substring)
let string = '30 Days of JavaScript'

//match
let string = 'love'
let patternOne = /love/  //regular expression
let patternOneTwo = /love/gi // g-means to search in the whole text, i - case insensitive
string.match(substring)

let string = 'I love Javascript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let pattern = /love/gi
console.log(string.match(pattern))

let txt = 'In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
let regEx = /\d/g // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//substr(): It takes two arguments,the starting index and number of characters to slice.
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script
let country = 'Finland'
console.log(country.substr(3, 4))   // land

//toLowerCase()
let string = 'JavaScript'
console.log(string.toLocaleLowerCase())

//const math objects
const PI = Math.PI
console.log(PI)

const num = Math.floor(Math.random() * 11)