
if("false"){
  console.log("yes")
}else{
  console.log("no")
}

console.log(typeof NaN)

const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 1 }
];


// ----------------------------------------------object/array/key coercion-------------------------//
let product = {
  id:1,
  name: "mobile",
  price: 5000
}

console.log(product["name"])  // object[keyProperty]

// name unknown (object coersion)
let productList = {}
productList[1] = product

console.log(productList)

let arr = [];
arr[1] = "a";
console.log(arr) // aikane index number 1, aita value "a" assign hoy nai kno, <1 empty item> aita kno

// let obj = {};
// obj[1] = "a";
// console.log(obj)

const obj = {};
obj[2] = "mouse";

console.log(Object.keys(obj)); // ["2"]
console.log(obj[2]);           // mouse









