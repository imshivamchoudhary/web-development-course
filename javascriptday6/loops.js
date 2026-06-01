let a = [1,2,3,4,5,6,7,8,9]

for(let i =0; i<a.length;i++){
    console.log(a[i])
}

a.forEach((value,index,a)=>{
    console.log(value,index,a)
})

let obj={
    a:1,
    b:3,
    c:5
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element)
    
    
}

for (const element of a) {
    console.log(element)
    
}
