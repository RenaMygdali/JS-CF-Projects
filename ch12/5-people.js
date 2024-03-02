const people = [
   {name: 'Alice', age: 30},
   {name: 'Bob', age: 25},
   {name: 'Charlie', age: 15}
]

// Δημιουργία νέου πίνακα με τα άτομα που έχουν ηλικία κάτω από 30 ετών
const under30 = people.filter(person => person.age < 30) 

console.log(under30)


// Δημιουργία νέου πίνακα με τα ονόματα των ατόμων που έχουν ηλικία κάτω των 30 ετών
const namesUnder30 = under30.map(person => person.name)

console.log(namesUnder30)