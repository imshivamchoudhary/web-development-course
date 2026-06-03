// calculate factorial
let a =4

// using reduce mathod
function fac(number){
    let arr = Array.from(Array(number+1).keys())
    let c= arr.slice(1,).reduce((a,b)=> a*b)
    return c
}
// console.log(fac(a))


// using function method
function facto(number){
    let f=1
    for(let i=1;i<=number;i++){
        f=f*i
    }
    return f
}
console.log(fac(a))
console.log(facto(a))