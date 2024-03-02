const user = {name: "Rena", age: 36, city: "Athens"}

console.log(user.name + " is " + user.age + " years old and lives in " + user.city)

hello("Hello")
hello2()


function hello(message) {
   console.log(message + " " + user.name)
}

// ή

function hello2() {
   console.log("Hello " + user.name)
}