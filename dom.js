//examine the document object

//console.dir(document)
/*console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title="Hey there"
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.All)*/
let header=document.getElementById("header-title")
console.log(header)
let targetheader=document.getElementById("main-header")
targetheader.style.borderBottom= "solid 3px #000"

let items=document.getElementsByClassName("title")
console.log(items)
items[0].style.fontweight= "bold"
items[0].style.color = "green"