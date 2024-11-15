const username = document.querySelector("#username");
const password = document.querySelector("#password");

const form = document.querySelector("#login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate username and password
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === "" || password === "") {
            alert("Username and password are required.");
            return;
        }
        if (username === dbUsername && password === dbPassword) {
            message.textContent = "Login successful";
        } else {
            message.textContent = "Incorrect username or password";
        }
        console.log(username, password)
    })