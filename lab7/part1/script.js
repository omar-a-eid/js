function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    displayMessage("Welcome");
  } else {
    displayMessage("Not registered");
  }
}

function displayMessage(message) {
  let messageElement = document.getElementById("login-message");
  messageElement.textContent = message;
}
