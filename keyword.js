//----------------1.this key word-----------------------//
// console.log(this) // output: {}

// ----------------2.this keyword on object---------------//
//[Note: this keyword refers object of user]
const user ={
   name: "Nahida",
   age:21,
   passion: function(){
    return "I love programming"
   },
   showName: function(){
      console.log(this.passion())
   }
}
//user.showName() 


// ------------------3.Regular function e this--------------//
function test() {
  console.log(this);
}

test();

// Play with Array String .. different type of sorting, filtering 