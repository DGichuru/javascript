//destructuring and spreading
const names  = [undefined, 'Brook', 'David']

let [
    firstPersond = 'Daniel',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'

] = names

//destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries){
    console.log(country, city)
}

const rect = {
    width: 20,
    height: 15
}

const rectPeri = rectangle =>{
    return 2 * (rectangle.width + rectangle.height)

}

console.log(rectPeri(rect))

const person = {}

//destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]

for (const {task, time, completed } of todoList) {
    console.log(task,time, completed)
}

// spcread operator ... 

const user = {
    name: 'Daniel',
    title: 'Programmmer',
    country: 'Kenya',
    city: 'Nairobi'

}

const copiedUser  = {...user}
console.log(copiedUser) 

const constants = [2.72, 3.14, 9.81, 37, 100]

let [
    e = 2.72,
    pi = 3.14,
    gravity = 9.81,
    humanBodyTemp = 37,
    waterBoilingTemp = 100
] = constants

console.log(constants)

const constants = [2.72, 3.14, 9.81, 37, 100]

let [
    e ,
    pi,
    gravity ,
    humanBodyTemp ,
    waterBoilingTemp 
] = constants

console.log(...constants)