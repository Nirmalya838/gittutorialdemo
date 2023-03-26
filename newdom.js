let item = document.getElementsByClassName("list-group-item")
console.log(item)
item[2].style.backgroundColor ="green"
for(let i=0;i<item.length;i++)
{
    item[i].style.color ="#2340fa"
}
let li= document.getElementsByTagName("li")
console.log(li)
li[4].style.backgroundColor="Blue"