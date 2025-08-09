console.log("Hello this is my first project!");

function getInfo() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert(`Logging in as ${username}`);
    }
}
