// AUTO LOWERCASE USERNAME
document.getElementById("username").addEventListener("input", function() {
    this.value = this.value.toLowerCase();
});

// PASSWORD STRENGTH
document.getElementById("password").addEventListener("input", function() {
    let val = this.value;
    let strength = document.getElementById("strength");

    let strong = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (strong.test(val)) {
        strength.style.background = "green";
    } else {
        strength.style.background = "red";
    }
});

// SHOW / HIDE PASSWORD
function togglePassword() {
    let pass = document.getElementById("password");
    let confirm = document.getElementById("confirmPassword");

    pass.type = pass.type === "password" ? "text" : "password";
    confirm.type = confirm.type === "password" ? "text" : "password";
}

// SIGN UP
function signup() {
    let user = username.value;
    let pass = password.value;
    let confirm = confirmPassword.value;

    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!regex.test(pass)) {
        alert("Password must be 8 chars, with number & symbol");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Signup successful!");
}

// LOGIN
function login() {
    let user = loginUser.value;
    let pass = loginPass.value;

    if (user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")) {

        window.location.href = "home.html";
    } else {
        alert("Invalid login");
    }
}
