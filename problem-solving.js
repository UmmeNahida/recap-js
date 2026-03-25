

const cart = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Book", price: 50, quantity: 1 },
  { name: "Bag", price: 100, quantity: 3 }
];


const TotalPrice = ()=>{
 return cart.reduce((acc,currentItem)=> currentItem.price * currentItem.quantity + acc,0)
}

console.log(TotalPrice())

// ✅ Task 2: Find duplicate numbers
const nums = [1,2,3,2,4,5,1,6];

// ✅ Task 3: Capitalize first letter
const str = "hello world";