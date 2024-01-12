// Example object
const person = {
  firstName: "Omar",
  lastName: "Ahmed",
  age: 24,
  occupation: "Engineer",
};

// Object Methods
console.log(Object.keys(person)); // Object keys: ["firstName", "lastName", "age", "occupation"]
console.log(Object.values(person)); // Object values: ["Omar", "Ahmed", 24, "Engineer"]
console.log(Object.entries(person)); // Object entries: [["firstName", "Omar"], ["lastName", "Ahmed"], ["age", 24], ["occupation", "Engineer"]]
console.log(Object.freeze(person)); // Freezes the object, making it immutable
console.log(Object.seal(person)); // Seals the object, preventing new properties and deletions
console.log(Object.getOwnPropertyNames(person)); // Returns an array of all properties (including non-enumerable ones)
console.log(Object.hasOwnProperty("age")); // Checks if an object has a specific property directly on itself
console.log(Object.isSealed(person)); // Checks if an object is sealed
console.log(Object.isFrozen(person)); // Checks if an object is frozen
console.log(Object.isExtensible(person)); // Checks if new properties can be added to an object

// Example array
const numbers = [1, 2, 3, 4, 5];

// Array Methods
console.log(numbers.length); // Array length: 5
console.log(numbers.join(", ")); // Joins array elements into a string: "1, 2, 3, 4, 5"
console.log(numbers.indexOf(3)); // Index of element 3: 2
console.log(numbers.concat([6, 7])); // Concatenates arrays: [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.slice(2, 4)); // Extracts a portion of the array: [3, 4]
console.log(numbers.reverse()); // Reverses the array: [5, 4, 3, 2, 1]
console.log(numbers.sort()); // Sorts the array (lexicographically by default): [1, 2, 3, 4, 5]
console.log(numbers.push(6)); // Adds an element to the end of the array and returns the new length: 6
console.log(numbers.pop()); // Removes the last element and returns it: 6
console.log(numbers.shift()); // Removes the first element and returns it: 1
console.log(numbers.unshift(0)); // Adds an element to the beginning of the array and returns the new length: 5

function outerFunction(x) {
  // Outer function
  function innerFunction(y) {
    // Inner function
    return x + y;
  }

  return innerFunction;
}

const closureExample = outerFunction(10);
console.log(closureExample(5)); // Outputs: 15
/*
The closure retains access to the x parameter of the outer function even after the outer function has completed execution. When closureExample is invoked with 5, it still has access to the x value (which is 10), resulting in a sum of 15
 */
