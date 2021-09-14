//FUNCTIONS
function functionName(param1) {
    //code here
}

function printFullName(firstName, lastName) {
    return `${firstName}  ${lastName}`
}


const areaOfCircle = (radius) => {
    let area = Math.PI  * radius * radius ;
    return area
}

console.log(areaOfCircle(10))

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))


const sumAllNums = (...args) => {
    let sum = 0;
    for (const element of args){
        sum += element
    }
    return sum
}

//default parameters
function functionName(param = value) {
    //code
    
}

//function greetings(name = 'Peter') {
 //   let message = `${name} , Welcome!`
 //   return message
//}
//console.log(greetings())

const  greetings =  (name = 'Peter') => `${name}, Welcome`

console.log(greetings('Daniel'))