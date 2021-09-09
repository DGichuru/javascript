//BOOLEANS
//ternary operators

let isRaining = true
isRaining
   ? console.log('You need a rain coat.')
   : console.log('No need for a rain coat')
isRaining = false

//date object
const now = new Date()
console.log(now)

//conditions
if (condition) {
   //truthy condition
}

let num = 3
if (num > 0) {
   console.log(`${num} is a positive number `)
}

//switch statemment
let weather = 'cloudy'
switch (weather) {
   case 'rainy':
      console.log('You need a rain coat.')
      break
   case 'cloudy':
      console.log('It might be cold , you need a jacket.')
      break
   case 'sunny':
      console.log('Go out freely')
      break
   default:
      console.log('No need for rain coat')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
