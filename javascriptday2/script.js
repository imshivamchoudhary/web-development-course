console.log("day 2 of javascript");
console.log("this is conditional tutorial")
let age = 0
let grace=0
// age+=grace
console.log("age",age)
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)
if(age>18){
    console.log("you can vote ")
}
else if(age==0){
    console.log("are you kidding")
}
else {
    console.log("you  can not vote")
}

// // Comparison operators
// == equal to 
// != not equal 
// === equal value and type
// !== not equal value or not equal type

// logical operators
// && logical and 
// || logical or
// ! not



//ternary operator
let a=6
let b=9
let c= a>b ?(a-b):(b-a)
console.log(c)
/* 
translate to :
if(a>b){
let c = a-b
}
else{
    let c - b-a
    }
*/