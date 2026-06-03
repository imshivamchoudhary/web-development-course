// employee name generator
let random=Math.random()
let first,second,third;

if(random<0.33){
    first="shyam"
}
else if(random<0.66 && random>=0.33){
    first="shivam"
}
else{
    first="sumit"
}

random=Math.random()
if(random<0.33){
    second="pvt"
}
else if(random<0.66 && random>=0.33){
    second="gov"
}
else{
    second="semi gov"
}

random=Math.random()
if(random<0.33){
    third="limited"
}
else if(random<0.66 && random>=0.33){
    third="corporate"
}
else{
    third="employee"
}

console.log(`${first} ${second} ${third}`)