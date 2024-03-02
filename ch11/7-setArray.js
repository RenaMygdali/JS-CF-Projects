const arr = [1, 2, 3, 2, 6, 4, 8, 4, 2, 3, 1]

const set = getUniqueValues(arr)
console.log(set)


function getUniqueValues(inputArr) {
   const uniqueValuesSet = new Set(inputArr)
   const newArr = Array.from(uniqueValuesSet)
   return newArr
}

