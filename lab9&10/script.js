function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!isValidPassword(password)) {
    displayMessage(
      "Password should contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long."
    );
    return false;
  }

  if (username === "admin" && password === "aA123456789") {
    displayMessage("Welcome");
  } else {
    displayMessage("Not registered");
  }

  return false;
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

function displayMessage(message) {
  let messageElement = document.getElementById("login-message");
  messageElement.textContent = message;
}
