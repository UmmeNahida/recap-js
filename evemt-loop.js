

const show_value = document.getElementById("show_value")

const change_value = (value)=>{
  show_value.innerText = value
}


setTimeout(()=>{
  change_value("this is time out")
}, 5000)

