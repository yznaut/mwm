// display user
user.innerText = "User: " + localStorage.getItem("user");

// switch pages
function show(page, btn) {
    document.querySelectorAll(".main > div").forEach(d => d.style.display = "none");
    document.getElementById(page).style.display = "block";

    document.querySelectorAll(".sidebar button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

// add currently watching
function add() {
    let title = t.value;
    let genre = g.value;
    let date = d.value;

    if (!title || !date) { alert("Title and Date required"); return; }

    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <b>${title}</b> (${genre}) - ${date}
        <br>
        <button onclick="finish(this)">Finish</button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;
    watching.appendChild(div);

    t.value=""; g.value=""; d.value="";
}

// finish currently watching → watched
function finish(btn) {
    let parent = btn.parentElement;

    // create watched card
    let watchedDiv = document.createElement("div");
    watchedDiv.className = "card";

    let movieInfo = parent.innerText.split("Finish")[0];

    // star rating HTML
    let starsHTML = '';
    for(let i=1;i<=5;i++){
        starsHTML += `<span class="star" data-value="${i}">&#9734;</span>`;
    }

    watchedDiv.innerHTML = `
        ${movieInfo}
        <br>
        Rate: <span class="stars">${starsHTML}</span>
        <br>Comment: <input type="text" placeholder="Add comment">
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    watched.appendChild(watchedDiv);
    parent.remove();

    // add click event to stars
    const starEls = watchedDiv.querySelectorAll('.star');
    starEls.forEach(star => {
        star.addEventListener('click', function() {
            const val = this.getAttribute('data-value');
            starEls.forEach(s => {
                s.innerHTML = s.getAttribute('data-value') <= val ? '&#9733;' : '&#9734;';
            });
        });
    });
}

// logout
function logout() {
    window.location="index.html";
}
