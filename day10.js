//sets and maps
const companies = new Set()
console.log(companies)

const people = [
    'Daniel',
    'Dantez',
    'Eunice',
    'Gichuru',
    'Elon',
    'Musk',
]


const setOfPeople = new Set(people)

for (const pep of setOfPeople){
    console.log(pep)
}
//console.log(setOfPeople)
const counts = []
const count = {}

for (const p of setOfPeople) {
    const filteredPeople = people.filter((an) => an === u)
    console.log(filteredPeople)
    counts.push({ lang: u, count: filteredPeople.length })
}

console.log(counts)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const map  = new Map(countries)
console.log(map)

