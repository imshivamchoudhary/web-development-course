let arrr = [4,7,2,9,1,23]
let newarr=[]
for(let i=0;i<arrr.length;i++){
    newarr.push(arrr[i]**2)
}
console.log(newarr)


let newar=arrr.map((e,index,arrr)=>{
    return e**2
})
console.log(newar)

const gts=(e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arrr.filter(gts))


let arr=[1,2,3,4]

const res=(a,b)=>{
    return a*b
}
console.log(arr.reduce(res))