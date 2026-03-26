user.innerText = "User: " + localStorage.getItem("user");

function show(page, btn) {
    document.querySelectorAll(".main > div").forEach(d => d.style.display = "none");
    document.getElementById(page).style.display = "block";

    document.querySelectorAll(".sidebar button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function add() {
    let title = t.value;
    let genre = g.value;
    let date = d.value;

    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        ${title} (${genre}) - ${date}
        <button onclick="finish(this)">Finish</button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    watching.appendChild(div);
}

function finish(btn) {
    let parent = btn.parentElement;

    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        ${parent.innerText}
        <br>Rating: <input type="number" min="1" max="5">
        <br><input placeholder="comment">
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    watched.appendChild(div);
    parent.remove();
}

function logout() {
    window.location = "index.html";
}
