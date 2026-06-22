console.log("This is Events, Event Bubbling, setInterval & setTimeout tutorial")
let button = document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b> you were clicked</b>"
})