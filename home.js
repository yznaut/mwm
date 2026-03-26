let watchingList = [];
let watchedList = [];

document.getElementById("userInfo").innerText =
    "User: " + localStorage.getItem("user");

// SWITCH PAGE
function showPage(page) {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("about").style.display = "none";

    document.getElementById(page).style.display = "block";
}

// ADD MOVIE
function addMovie() {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let date = new Date().toLocaleDateString();

    let li = document.createElement("li");
    li.innerHTML = `${title} (${genre}) - ${date}
    <button onclick="finishMovie(this)">Finish</button>
    <button onclick="deleteMovie(this)">Delete</button>`;

    document.getElementById("watching").appendChild(li);
}

// DELETE
function deleteMovie(btn) {
    btn.parentElement.remove();
}

// FINISH → MOVE TO WATCHED
function finishMovie(btn) {
    let li = btn.parentElement;
    let text = li.innerText;

    let newLi = document.createElement("li");
    newLi.innerHTML = text +
        ` ⭐⭐⭐⭐⭐ <input placeholder="comment">
        <button onclick="deleteMovie(this)">Delete</button>`;

    document.getElementById("watched").appendChild(newLi);
    li.remove();
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}
