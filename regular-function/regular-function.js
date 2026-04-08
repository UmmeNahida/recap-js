// regular function a this create hoy but seta depend kore this call korar upore 

// Note: this keyword automatically global hoye jay regular function a
function test() {
  console.log(this);
}
test(); //result: window: object and strict mode: undefined

// -----------------------------------------------------------🔥 Example 2: Object method----------
const user = {
  name: "Nahida",
  greet: function () {
    console.log(this.name);
  }
};
user.greet(); // output: Nahida becuase this call is different way




