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

