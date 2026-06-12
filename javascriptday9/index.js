console.log("this Selecting by Ids, Classes, and More tutorial")

let boxs=document.getElementsByClassName("box")
console.log(boxs)
boxs[2].style.backgroundColor="yellow"

document.getElementById("yellow").style.backgroundColor="yellow"
document.querySelector(".box").style.backgroundColor="pink"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink"
})

let e= document.getElementsByTagName("div")
console.log(e)
e[5].matches("#yellow")
console.log(e[5].matches("#yellow"))
console.log(e[5].matches("#yell"))
console.log(e[6].closest("#yellow"))
console.log(e[6].closest("html"))

console.log(document.querySelector(".cont").contains(e[4]))
console.log(document.querySelector(".cont").contains(e[0]))
console.log(document.querySelector(".cont").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".cont")))