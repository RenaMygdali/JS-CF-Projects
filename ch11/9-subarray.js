const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const newArr = createSubArrays(arr, 3)
console.log(newArr)


function createSubArrays(arr, subArrLength) {
   const newArr = []
   arr.forEach((element, index) => { 
      if (index % subArrLength === 0) {
         newArr.push([element]);
       } else {
         newArr[newArr.length - 1].push(element);
       }
   });
   return newArr
}