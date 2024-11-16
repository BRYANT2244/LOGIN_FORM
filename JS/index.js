
// Register Form Submission
const registerForm = document.querySelector("#register-form");
if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const email = document.querySelector("#email").value;

        if (!username || !password || !email) {
            alert("All fields are required.");
            return;
        }

        const data = { username, password, email };

        try {
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.href = "index.html";
            } else {
                alert(result.error || "Registration failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
}

// Login Form Submission
const loginForm = document.querySelector("#login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        if (!username || !password) {
            alert("Username and password are required.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login successful!");
                localStorage.setItem("accessToken", result.access_token); // Store JWT token
                window.location.href = "dashboard.html";
            } else {
                alert(result.error || "Login failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
}