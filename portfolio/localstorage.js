// function for sign up

function signup(e) {
event.preventDefault()

var email = document.getElementById("m").value;
var fullname = document.getElementById("fullname").value;
var pass = document.getElementById("p").value;
var msg = document.querySelector(".message");
 var user = {

    email: email,
    fullname: fullname,
    password: pass,
};

var json = JSON.stringify(user);

localStorage.setItem(email, json)

// window.location.href = "index.html";
msg.innerHTML = "You have Successful Sign Up";
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