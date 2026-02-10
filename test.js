

const BooksArray = [
  {
  title: "Time management",
  author: "Nahida Akther",
  year: 2025,
  price: 120
},
  {
  title: "Morning Challenge",
  author: "Nahida Akther",
  year: 2025,
  price:300
}

]


const booksTitle = ()=> BooksArray.map((book)=> book.title)
const totalPrice = ()=> BooksArray.reduce((item,price)=> item + price,0)
console.log(booksTitle())
console.log(totalPrice())
