function login() {
  while (true) {
    let username = prompt("Enter your username: ");
    let password = prompt("Enter your password: ");

    if (username !== "admin") {
      alert("Wrong username");
    } else if (password !== "421$$") {
      alert("Wrong password");
    } else {
      alert(`Welcome ${username}!`);
      return;
    }
  }
}

login();

/****  Calculator ******/
function calc(params) {
  let num1 = parseFloat(prompt("Enter a number:"));

  while (true) {
    let operation = prompt(
      "Enter the operation (sum, subtract, multiply, divide, modulus):"
    ).toLowerCase();
    let num2 = parseFloat(prompt("Enter a number:"));
    switch (operation) {
      case "sum":
        num1 += num2;
        break;
      case "subtract":
        num1 -= num2;
        break;
      case "multiply":
        num1 *= num2;
        break;
      case "divide":
        num1 /= num2;
        break;
      case "modulus":
        num1 %= num2;
        break;
      default:
        alert("Invalid operation. Please enter a valid operation.");
        continue;
    }

    alert(`the result is ${num1}`);
  }
}

calc();
