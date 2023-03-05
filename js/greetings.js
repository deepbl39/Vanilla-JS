const loginform = document.getElementById("login-form");
const greeting = document.getElementById("greeting");
const loginInput = document.getElementById("login-input");

function onSubmit(event){
    event.preventDefault();
    loginform.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);

    greeting.classList.remove("hidden");
    greeting.innerText = username;
}

const saveusername = localStorage.getItem("username");

// console.log(saveusername);

if(saveusername == null) {
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", onSubmit);
} else {
    greeting.classList.remove("hidden");
    greeting.innerText = saveusername;
}