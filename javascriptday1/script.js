console.log("This is day 1 of js")

// let a = 4;
var a = 4;
let b = 19;
let c = "CodeVerseShivam";

let _a="shyam";
// let 2a="not allowed"

{
    //let is a block scope variable
    // var is a global scope variable
    // let a=21; 
    var a=22;
    console.log(a)

}
console.log(a)

console.log(a+b)
console.log(typeof a ,typeof b, typeof c)

const a1=45 ;//it will used to constant a variable that cannot change br the value of a varible
// a1=a1+1;



//In js their are two type of data types
// 1 Primitive and 2 object
// object is a user define data type and you can make your favorite data type with the help of primitive data type
//there are 7 primitive data type 
// 1 NULL 2 Numbe 3 string 4 symbol 5 undefined 6 boolean 7 bigInt 

let x = "CodeVerseShivam";
let y = 23;
let z = 23.4;
const p=true;
let q = undefined;
let r= null;
console.log(x,y,z,p,q,r) ;
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r) ;

let o ={
    name:"Shivam",
    "job code":1
}

console.log(o);
o.salary="2crores";
console.log(o);
o["job tittle"]="Software engineer"
console.log(o);
