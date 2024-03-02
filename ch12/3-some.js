const numbers = [-1, -2, -3, -4, -5, -6, 7, 8]

let onePositive = numbers.some(num => num > 0)

console.log(`Positive numbers exist: ${onePositive}`)