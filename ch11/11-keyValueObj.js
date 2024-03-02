const product = {prodName: "Milk", description: "cow milk", producer: "Delta AE", quantity: 500}

const properties = ["prodName", "description", "price", "quantity"]

const filteredObj = filterByKey(product, properties)
console.log(filteredObj)


function filterByKey(obj, keysArr) {
   const newObj = {}
   keysArr.forEach(key => {
     if (obj.hasOwnProperty(key)) {
       newObj[key] = obj[key]
     }
   })
   return newObj
 }
 