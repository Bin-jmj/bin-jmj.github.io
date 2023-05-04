



// function for sign up

function signup(e) {
event.preventDefault()

var email = document.getElementById("m").value;
var fullname = document.getElementById("fullname").value;
var pass = document.getElementById("p").value;
 var user = {

    email: email,
    fullname: fullname,
    password: pass,
};

var json = JSON.stringify(user);
localStorage.setItem(email, json)

// fetch data from localstorage to js format
var user = localStorage.getItem(email);
var dt = JSON.parse(user);
var em = dt.email;
var name = dt.fullname;

// display info to the user
var _form = document.querySelector(".sign");
var msg = document.querySelector('.message');
var _user_message = document.querySelector('.user_message');

    if (_form.style.display !== "none")
    {
        _form.style.display = "none";
        _user_message.style.display = "block";
        
        msg.innerHTML = ` Dear <b>${name}</b> You have Successful Sign in using Email Account <b> ${em}</b>`;
    }

}


function login(e) {
    event.preventDefault();


var email = document.getElementById("email1").value;
var pass = document.getElementById("password1").value;
var result = document.querySelector(".log");

var user = localStorage.getItem(email);
var data = JSON.parse(user);

if(user == null) {
    result.innerHTML = "Email Does not Exist";
}

else if(email == data.email && pass == data.password) {
    result.innerHTML = "Login Sucessfull";
    window.location.href = "home.html";

}else {
    result.innerHTML = "Wrong password";
}
}