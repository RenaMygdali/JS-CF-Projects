const arr1 = [1, 3, 7, 9, 10, 4, 6]
const arr2 = [3, 2, 5, 7, 6, 12, 10] 

const commonValuesArr = filterCommonValues(arr1, arr2)
console.log(commonValuesArr)


function getCommonValues(arr1, arr2) {
   const commonValuesArr = []

   arr1.forEach(element => {
      if (arr2.includes(element)) {
         commonValuesArr.push(element)
      }
   })
   return commonValuesArr
}


// ή με filter

function filterCommonValues(arr1, arr2) {
   const commonValuesArr = arr1.filter(element =>
      arr2.includes(element))
   return commonValuesArr
}