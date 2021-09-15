//OBJECTS
function letsLearnScope() {
    const gravity = 9.81
    console.log(gravity)
}

if (true){
    const gravity = 9.81
    console.log(gravity)
}

//creating objects
const person = {}

const rectangle = {
    length: 20,
    width: 20
}
//

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

const keys = Object.keys(copyPerson)

//Object.entries to get value and key
const entries = Object.entries(copyPerson)
console.log(entries)

//checking whether a key or property exists.

console.log(copyPerson.hasOwnProperty('name'))
// dog object 
const dog = {
    name: 'bruno',
    owner: 'Daniel',
    legs: 4,
    bark: function() {
        return 'WOOF WOOF'
    }

}

//PRACTISE

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    getPoints: function() {
      return `${this.Alex.points}`
    }
  }

 

  console.log(users.getPoints())