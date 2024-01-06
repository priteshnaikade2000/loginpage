function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic input validation
    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Please enter both username and password.";
        return;
    }

    // In a real-world scenario, you would hash the password and compare it with the stored hash
    // For simplicity, let's assume a hardcoded username and password
    var storedUsername = "user123";
    var storedPassword = "pass123";

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("error-message").style.color = "green";
        document.getElementById("error-message").innerText = "Login successful!";
    } else {
        document.getElementById("error-message").style.color = "red";
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
}
