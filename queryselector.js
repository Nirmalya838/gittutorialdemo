let secitem = document.querySelector(".list-group-item:nth-child(2)")
secitem.style.background="green"
let thirditem =document.querySelector(".list-group-item:nth-child(3)")
thirditem.style.display ="none"
let odd=document.querySelectorAll("li:nth-child(odd")
for(let i=0;i<odd.length;i++)
{
    odd[i].style.background="green"
}
