// User Login - David Stobbe

// Variables for HTML elements
let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");
let loginBtnEl = document.getElementById("loginBtn");

// Event listeners 
loginBtnEl.addEventListener("click", login)

function login() {
    if (usernameEl.value === "admin" && passwordEl.value === "1234") {
        alert("Login Successful");
    } else if (usernameEl.value === "admin" && passwordEl.value !== "1234") {
        alert("Invalid Password");
    } else {
        alert("Invalid Username");
    }
}
