// ---------------- REGISTER --------------------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            alert("Email already registered!");
            return;
        } 

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful!");
        window.location.href = "login.html";
    });
}


// ---------------- LOGIN --------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(u => u.email === email && u.password === password);

        if (!validUser) {
            alert("Incorrect Email or Password!");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        alert("Login Successful!");
        window.location.href = "https://www.linkedin.com/in/amansethiyaa/"; // page with your contact link
    });
}
