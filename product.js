

const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 1 }
];

const cart2 = { id: 1, name: "Laptop", price: 50000, quantity: 1 }
const friends = ["ayesh", "nahida", "mahir"]

console.log(friends[1])


let uniqueProduct = []

function getTotalProduct(){
  const result = cart.map((product)=> {
    if(!uniqueProduct.includes(product.id)){
        uniqueProduct.push(product)
    }

    
  })

  return uniqueProduct
  
}


const result = getTotalProduct()
// console.log("result",result)

