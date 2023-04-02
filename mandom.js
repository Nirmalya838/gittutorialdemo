// Traversing the DOM//
let itemList = document.querySelector("#items");

// parentnode//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode)

// parentElement//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement)

//childnodes//
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow"

//firstchild//
console.log(itemList.firstChild);

//firstelementchild//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

//lastchild//
console.log(itemList.lastChild);

//lastelementchild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

//nextSibling//
console.log(itemList.nextSibling)

//nextelementsibling//
console.log(itemList.nextElementSibling)

//previousSibling//
console.log(itemList.previousSibling);

//previousElementSibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green"

//create Element//
//create a div//
let newDiv=document.createElement("div");

//add class//
newDiv.className = "hello"

//add Id//
newDiv.id="hello1"

//add attribute
newDiv.setAttribute("title", "Hello Div")

//create a textnode//
let newDivText=document.createTextNode("Hello World")

//add text to div//
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container")
let h1= document.querySelector("header h1");

console.log(newDiv)
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1);
