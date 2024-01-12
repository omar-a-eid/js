// Lap1
const numberOfValues = prompt("Enter the number of values:");

const values = [];

for (let i = 0; i < numberOfValues; i++) {
  const userInput = prompt(`Enter value ${i + 1}:`);
  const parsedValue = parseFloat(userInput);
  if (!isNaN(parsedValue)) {
    values.push(parsedValue);
  } else {
    alert(`Invalid input. Please enter a valid number for value ${i + 1}.`);
    i--;
  }
}

const sum = values.reduce((acc, value) => acc + value, 0);
const average = sum / values.length;

alert(`Sum: ${sum} \nAverage: ${average}`);

// Lap2
const contacts = [];

while (true) {
  const operation = prompt("Enter operation (add/search/q):");

  if (operation === "add") {
    const name = prompt("Enter the name:");
    const phoneNumber = prompt("Enter the phone number:");

    const contact = {
      name,
      phoneNumber,
    };

    contacts.push(contact);
    alert("Contact added successfully.");
  } else if (operation === "search") {
    const searchItem = prompt("Enter name or phone number to search:");

    const contact = contacts.find((contact) => {
      return (
        contact.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        contact.phoneNumber.includes(searchItem)
      );
    });
    if (contact) {
      alert(
        `Contact found: \nName: ${contact.name} \nPhone Number: ${contact.phoneNumber}`
      );
    } else {
      alert("Contact not found.");
    }
  } else if (operation === "q") {
    break;
  } else {
    alert("Invalid operation. Please enter add, search, or q.");
  }
}

// Bonus
const shapeName = prompt(
  "Enter the name of the shape (circle/triangle/square/rectangle/parallelogram/trapezium/ellipse):"
);

switch (shapeName.toLowerCase()) {
  case "circle":
    const radius = prompt("Enter the radius:");
    const circleArea = Math.PI * Math.pow(radius, 2);
    alert(`The area of the circle is: ${circleArea}`);
    break;
  case "triangle":
    const base = prompt("Enter the base:");
    const heightTriangle = prompt("Enter the height:");
    const triangleArea = 0.5 * base * heightTriangle;
    alert(`The area of the triangle is: ${triangleArea}`);
    break;
  case "square":
    const sideSquare = prompt("Enter the side length:");
    const squareArea = Math.pow(sideSquare, 2);
    alert(`The area of the square is: ${squareArea}`);
    break;
  case "rectangle":
    const lengthRectangle = prompt("Enter the length:");
    const widthRectangle = prompt("Enter the width:");
    const rectangleArea = lengthRectangle * widthRectangle;
    alert(`The area of the rectangle is: ${rectangleArea}`);
    break;
  case "parallelogram":
    const baseParallelogram = prompt("Enter the base:");
    const heightParallelogram = prompt("Enter the height:");
    const parallelogramArea = baseParallelogram * heightParallelogram;
    alert(`The area of the parallelogram is: ${parallelogramArea}`);
    break;
  case "trapezium":
    const base1 = prompt("Enter the length of base 1:");
    const base2 = prompt("Enter the length of base 2:");
    const heightTrapezium = prompt("Enter the height:");
    const trapeziumArea =
      0.5 * (parseInt(base1) + parseInt(base2)) * heightTrapezium;
    alert(`The area of the trapezium is: ${trapeziumArea}`);
    break;
  case "ellipse":
    const semiMajorAxis = prompt("Enter the semi-major axis:");
    const semiMinorAxis = prompt("Enter the semi-minor axis:");
    const ellipseArea = Math.PI * semiMajorAxis * semiMinorAxis;
    alert(`The area of the ellipse is: ${ellipseArea}`);
    break;
  default:
    alert("Invalid shape name. Please enter a valid shape.");
}
