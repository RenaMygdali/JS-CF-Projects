const product = {prodName: "Milk", description: "cow milk", producer: "Delta AE", quantity: 500}

const transformedProduct = transformObj(product, (key, value) => 
   [key.toUpperCase(), String(value).toUpperCase()])

console.log(transformedProduct);

function transformObj(obj, callbackFunction) {
  const entries = Object.entries(obj)

  const newEntries = entries.map(([key, value]) => callbackFunction(key, value))

  const newObj = Object.fromEntries(newEntries)

  return newObj
}