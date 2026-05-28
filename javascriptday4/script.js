console.log("This is a functions tutorial")

function about(name){
    console.log("Hey" + name + "you are nice")
    console.log("Hey" + name + "you are good")
    console.log("Hey" + name + "your tshirt is nice")
    console.log("Hey" + name + "your course is good too")
    console.log("Hey" + name + "you are nice")
}
about("Shivam")

function sum(x,y,c=2){
    // console.log(x+y)
    console.log(x,y,c)
    return x+y+c
}
result1=sum(3)
result2=sum(4,3)
result3=sum(2,5)
console.log("The sum of these number is:",result1)
console.log("The sum of these number is:",result2)
console.log("The sum of these number is:",result3)

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(12)
func1(14)
func1(121)