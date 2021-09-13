//LOOPS
//for (initialization, condition, increment/decrement)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Kenya']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr)

const numbers = [1,2,3,4,5]
let sum = 0
for(let i= 0; i < numbers.length; i++) {
    sum += numbers[i]
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Kenya']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}

let i = 1
while (i <= 7) {
  console.log('#')
  i++
}

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)
//forloop
const numbers = [1,2,3,4,5]

for (const num of numbers) {
    console.log(num)
     
}
//continue

for(let  i = 0; i <= 5; i++){
    
    console.log('#')
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

let newArray = fullStack.toUpperCase()

console.log(newArray)


