// part 1
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

// part 2
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Area of ${this.name}: ${area}`);
  }
}

const squareInstance = new Square(5);
squareInstance.calcPerimeter();
squareInstance.calcArea();

// part 3
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription = "Square the triple of any number you provide";

  static calculate(n) {
    return super.calculate(n) ** 2;
  }
}

// Example test
console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));

console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);
