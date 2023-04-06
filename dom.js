function savedata(event)
{
    event.preventDefault();
    let firstname = event.target.fname.value;
    let lastname = event.target.lname.value;
    let address = event.target.add.value;
    let city = event.target.city.value;
    let state = event.target.state.value;
    let pincode = event.target.pin.value;
    let phone = event.target.ph.value;
    let date = event.target.date.value;
    console.log(firstname)

    localStorage.setItem("Firstname", firstname);
    localStorage.setItem("Lastname", lastname);
    localStorage.setItem("Address", address);
    localStorage.setItem("City", city);
    localStorage.setItem("State", state);
    localStorage.setItem("Pincode", pincode);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Date", date);

    let cli ={
        firstname,
        lastname,
        address,
        city,
        state,
        pincode,
        phone,
        date
    }
    let res=JSON.stringify(cli)
    localStorage.setItem(firstname, res)
    console.log(localStorage)
    showuser(res)
}
    function showuser(res)
    {   
        const user = JSON.parse(localStorage.getItem(fname));
        const message = `Thank you, ${fname} ${lname} from ${city}, for booking with us!`;
        document.querySelector('.format').innerHTML = `<p>${message}</p>`;
    }