

const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 1 }
];


function getTotalProduct(){
  
  const result = cart.map((product)=> product.price)
  return result
}


const result = getTotalProduct()
console.log(result)
console.log(cart.length)

