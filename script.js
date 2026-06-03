// Welcome Message
function showMessage() {
    alert("Thank You For Choosing Jayakumar Paal Pannai!");
}

// Page Loaded
window.addEventListener("load", () => {
    console.log("Jayakumar Paal Pannai Website Loaded Successfully");
});

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (!username || !password) {
            alert("Username or Password field not found.");
            return;
        }

        if (
            username.value === "jpglks" &&
            password.value === "10-11-2002"
        ) {

            alert("Login Successful");
            window.location.href = "login.html";

        } else {

            alert("Invalid Username or Password");

        }
    });
}

// Search Button
const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {
        alert("Searching Products...");
    });

}

function logout(){

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if(confirmLogout){

        window.location.href = "login.html";

    }
}