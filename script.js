// lowercase username
document.getElementById('suUser').oninput = e =>
    e.target.value = e.target.value.toLowerCase();

// password validation
document.getElementById('suPass').oninput = function() {
    let v = this.value;

    len.className = v.length >= 8 ? "valid" : "invalid";
    num.className = /[0-9]/.test(v) ? "valid" : "invalid";
    sym.className = /[!@#$%^&*]/.test(v) ? "valid" : "invalid";
};

// show/hide password
function toggle(id) {
    let input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// signup
function signup() {
    let u = suUser.value;
    let p = suPass.value;
    let c = suConfirm.value;

    if (p !== c) return alert("Passwords do not match");
    if (!(p.length >= 8 && /[0-9]/.test(p) && /[!@#$%^&*]/.test(p)))
        return alert("Password does not meet requirements");

    localStorage.setItem("user", u);
    localStorage.setItem("pass", p);

    suUser.value = "";
    suPass.value = "";
    suConfirm.value = "";

    alert("Signed up!");
}

// login
function login() {
    if (liUser.value === localStorage.getItem("user") &&
        liPass.value === localStorage.getItem("pass")) {
        window.location = "home.html";
    } else alert("Invalid login");
}
