console.log("This is Events, Event Bubbling, setInterval & setTimeout tutorial")
let button = document.getElementById("btn")
// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b> you were clicked</b>"
// })


button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "hey you were <b>clicked</b>"
})

button.addEventListener("contextmenu", () => {
    alert("don't right clicked please !!")
})

button.addEventListener("keydown",(e)=>{
    console.log(e)
})

document.addEventListener("keydown",(e)=>{
    console.log(e)
})
