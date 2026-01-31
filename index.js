



// var a = "ABCD"; // re declare, re assign
// let c = "ABCD";  // re declare X, re assign
// const b = "ABCD" // re decalre X, re assign X
// var myGblobal = ""

// (function Nahida() {
//   // Scope A
//   var a = "Nahida";
//   console.log(a);
// })();

// (function Abail() {
//   // Scope B
//   var a = "Ababil";
//   console.log(a);
// })();

// function x() {}
// const x = () => {};
// () => {};

// function <- function as parameter

// (() => {}) -> (() =>{ hof }) -> (() => {})

// const x = (param) => {
//   console.log(param);
//   return (num)=>{
//     return `"something" ${num}`
//   }
// };

// const y = x; //reference consume of X fun

// const extendY = y("nahida")
// console.log(extendY(30))


// return (param) => func(param);

// const by20 = (value = 0) => value * 20;
// const by30 = (value = 0) => value * 30;
// const by40 = (value = 0) => value * 40;

// function hof(func) {
//   return function child(param) {
//     return func(param);
//   };
// }

// console.log(hof(by20));

// const child = hof(by20);

// console.log(child(50));

/*
   func list:
    - reduce
    - multiply
  
   calld("REDUCE", [1, 2, 3, 4]) // 10
   calld("MLULTILY", [1, 2, 3, 4]) // 2, 4, 6, 8

*/


// const multyply = (arr)=>{
//   return arr.map(item=>item * 2)
// }

// const reduce =(arr)=>{
//   return arr.reduce((pre, curr)=> pre + curr,0)
// }


// const builderFn = (type,arr)=>{
//    switch(type){
//     case "REDUCE":
//     return reduce(arr)
    
//     case "MULTIPLY":
//     return multyply(arr)
//    }
// }

// const result = builderFn("MULTIPLY", [12,13,14])


// const horFn =(calFn)=>{

//    return (type,)=> fun()
// }



for (let i = 0; i <= 100000; i++) {
  console.log("I love to create bugs")
}

const constants = {
  MULTILY: "MULTILY",
  REDUCE: "REDUCE",
  EVEN_FINDER: "OOD_FINDER",
  GET_TRUTHY: "GET_TRUTHY"
};

const worker = {
  [constants.MULTILY]: (arr) => arr.map((item) => item * 2),
  [constants.REDUCE]: (arr) => arr.reduce((pre, curr) => pre + curr, 0),
  [constants.EVEN_FINDER]: (arr) => arr.filter((item) => item % 2 === 0 && Boolean(item)),
  [constants.GET_TRUTHY]: (arr)=> arr.filter(Boolean)
};


const hoc = (worker) => (type, arr) => worker[type](arr);

const called = hoc(worker);

const myArr = [2, 3, 4, null];

Object.values(constants).forEach((type) =>
  console.log(`calculation ${type.toLocaleLowerCase()}:`, called(type, myArr))
);