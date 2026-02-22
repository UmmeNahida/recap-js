const API = "https://api.codeababil.com/secret-key";
const fs = require("fs");
const { nextTick } = require("process");

const handleFetch = async (callback) => {
  try {
    const response = await fetch(API, {
      method:"GET", 
      headers:{
      'Content-Type':"application/json"
      }
    });

    const data = await response.json(); // Task
      
    if(typeof callback !== 'function') return;

    const result =  callback(data);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

handleFetch((data) =>{
  // console.log("I love Programming!")
  // console.log(data);

  return {...data, message: "I love programming!"};
})


fs.readFile("pakhi.txt", "utf8",(err, data)=>{
   if(err){
    console.log(err)
   }else{
    console.log(data)
   }
})



// why am I use callback in next

// * to handle async Operation efficiantly
// * remove non blocking behavior from Node.js 
// * improve performance