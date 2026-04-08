console.log("message", message)

if("false"){
  console.log("yes")
}else{
  console.log("no")
}

console.log(typeof NaN)

const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 5 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 1 }
];


const result = {};

for (let product of cart) {
  if (result[product.id]) {
    console.log("resulttt:",result)
    result[product.id].quantity += product.quantity;
  } else {
    console.log({...product})
    result[product.id] = { ...product };
  }
}

console.log("card result: ", result)


// ----------------------------------------------object/array/key coercion-------------------------//
let product = {
  id:1,
  name: "mobile",
  price: 5000
}
// console.log("PP",product["name"]) 

// name unknown (object coersion)
let productList = {}
productList[1] = product  // aita index akare na bose key hisabe use hobe
console.log(productList) //output: { '1': { id: 1, name: 'mobile', price: 5000 }}

let arr = ["c"];
arr[1] = product;  // aita index akare aikane bosbe 
console.log(arr) // ["c","a"]

// let obj = {};
// obj[1] = "a";
// console.log(obj)

const obj = {};
obj[2] = "mouse";

console.log(Object.keys(obj)); // ["2"]
console.log(obj[2]);           // mouse
simple()
var message = "hello"


// sayHi(); // TypeError: sayHi is not a function
// let sayHi = function() {
//   console.log("Hi!");
// };


function simple(){
  console.log("say Hi")
}

const arrayNum = [1,5,2,4,12,6]

function findOddNum(){
  for(num of arrayNum){
       if(num % 2 === 0){
           console.log(`this is even num ${num}`)
       }else{
           console.log(`this is odd ${num}`)
       }
  }
}


findOddNum()



function expression(){
  console.log("this is call to function expression")
}



