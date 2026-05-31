console.log("This is array tutorial:")

let arr = [1,2,3,4,5,6]
console.log(arr)

console.log(`length of array is ${arr.length}`)
console.log(`type of array is ${typeof arr}`)

console.log(arr[0])
console.log(arr[3])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr)
console.log(arr.pop(),arr)

console.log(arr.push(234,22))
console.log(arr.shift(),arr)
console.log(arr.unshift("shivam"))
console.log(arr)
console.log(delete arr[3])
console.log(arr)
let a1=[1,23,32]
let a2=[1,23,32]
let a3=[1,23,32]
console.log(a1.concat(a2,a3))

let arr1=[1,2,3,4,45,56,67,6]
console.log(arr1.splice(0,3,23,13))
console.log(arr1)