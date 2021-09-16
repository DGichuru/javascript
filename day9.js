//HIGHER ORDER FUNCTIONS

const callback = (n) => {
    return n ** 2
}

//take other functions as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

//Returning funtions:Higher order function returning an other function

const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}

console.log(higherOrder(2) (3) (10))

//callback function instance of the ForEach method

const numbers = [1,2,3,4]

const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    numbers.forEach(callback)
    return sum
}

console.log(sumArray(numbers))
//simplified

const numbers = [1,2,3,4,5]

const sumArray = arr => {
    let sum = 0
    numbers.forEach(function(element) {
        sum += element
    })
    return sum
}
console.log(sumArray(numbers))

//setting time

function callBack() {
    //code
}
setInterval(callBack, duration)

function sayHello() {
    console.log('Hello')
  }
setInterval(sayHello, 2000) 

//set timeout
//functional programming
arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})

arr.forEach((element, index, arr) => {
    console.log(index, elem, arr)

})

let sum = 0;
const numbers = [1,2,3,4,5]

numbers.forEach(num => console.log(num))

let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => sum += num)

console.log(MediaKeyStatusMap)

const countries  = ['Finland', 'Kenya', 'Tanzania', 'Burundi', 'Botswana', 'Kigali', 'Uganda']
countries.forEach((element) => element.toUpperCase())
// map method


const modifiedArray = arr.map(function (element , index, arr) {
    return element
})

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map((num) => num * num)

const fiveLetterCountries  = countries.filter(
    (country) => country.length === 5
)

console.log(fiveLetterCountries)


const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]


const greatScores = scores.filter((score) => score.score >= 90)

const ages = [24, 15, 25, 17, 35, 18]
const re = []
const re = ages.find((age) => age < 20)

console.log(re.push())

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const score = scores.find((user) => {
    return user.score > 80
  })
  console.log(score)

  //sorting object arrays

objArr.sort(function (a,b) {
    if(a.key < b.key) return -1
    if(a.key > b.key) return 1
    return 0
})

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users)