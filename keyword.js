//------------------------------------------------1.this key word-----------------------//
// console.log(this) // output: {}

// -----------------------------------------------2.this keyword on object---------------//
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


// -------------------------------------------------3.Regular function e this----------------//
"use strict";
function test() {
  console.log(this);
}
// test();

//-------------------------------------------------4. Arrow function e this--------------------//
// Note:  👉 Output: undefined
//  ✔️ Explanation:
// Arrow function nijer this create kore na
// Outer scope theke this ney (lexical this)
this.developerInfo = {
  name: "Programmer Nahida",
  role: "expern in javaScript"
}
const student = {
  name: "Nahida",
  showName: () => {
    console.log(this.developerInfo);
  }
};
student.showName();

//-------------------------------------------------5. Constructor function e this----------------//
//Note: new use korle this = newly created object
function Programmer(name) {
  this.age = "25";
  this.developer="Pakhi"
  this.name=name
}
const u1 = new Programmer("Nahida");
// console.log(u1.name); // output: Nahida

//--------------------------------------------------6. Event handler e this-----------------------//
// button.addEventListener("click", function () {
//   console.log(this);
// });
// this = button element

//-------------------7. call / apply / bind diye this control kora--------//
function great(){
  console.log(this.position) // output: Software Engineer
  console.log(this.level = "Senior") // Senior
}

const winner ={name:"Nahida", position:"Software Engineer", location:"sylhet"}
great.call(winner)


// Play with Array String .. different type of sorting, filtering 