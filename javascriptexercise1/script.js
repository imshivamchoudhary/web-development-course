/*
Create a faulty calculator using javascript 
 */
let random = Math.random()

let a = prompt("enter first number")
let b =prompt("enter operator")
let c = prompt("enter second number")

let obj={
    "+":"-",
    "*":"+",
    "/":"**",
    "-":"/",
}
console.log(random)
if(random > 0.1){
    //perform correct calculation
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)} `)
}
else{
    //perform wrong calculation
    b=obj[b]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}