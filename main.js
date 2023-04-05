function saveToLocalStorage(event)
{
    event.preventDefault();
    let clientname = event.target.username.value;
    let email = event.target.emailId.value;
    let phone = event.target.phonenumber.value;
    
    localStorage.setItem("name", clientname);
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone);

let obj ={
    clientname,
    email,
    phone
}
let myj=JSON.stringify(obj)
localStorage.setItem("userdetails", myj)
console.log(localStorage)
}