const grades = {Java: 6, HTML: 8, CSS: 6.5, JavaScript: 8.4, Python: 7.7}

const increaseGradesFunction = value => value += 0.5

const finalMathCourseGrades = mapObjValues(grades, increaseGradesFunction)
console.log(finalMathCourseGrades)

function mapObjValues(obj, mappingFunction) {
   const newObj = {}
   for (const value in obj) {
      newObj[value] = mappingFunction(obj[value])
   }
   return newObj
}