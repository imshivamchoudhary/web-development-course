console.log("this is DOM - Children, Parent & Sibling Nodes tutorial")
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].firstElementChild)
let con=document.body.childNodes[1]
console.log(con)
console.log(con.childNodes)
console.log(con.firstChild)
console.log(con.lastChild)
console.log(con.firstElementChild)
console.log(con.lastElementChild)
console.log(con.firstElementChild.style.color="red")
con.firstElementChild.style.color="blue"
con.firstElementChild.style.background="red"
console.log(con.firstElementChild.parentElement)
let a=document.body.firstElementChild 
console.log(a)
console.log(a.children)
console.log(a.children[0])
console.log(a.children[4])
a.children[2].style.color="orange"
a.children[2].style.background="yellow"
console.log(a.children[2].nextElementSibling)
console.log(a.children[2].previousElementSibling)
console.log(a.children[2].previousSibling)