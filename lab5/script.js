class Person {
  constructor(name, money, sleepMood, healthRate) {
    this.name = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

class Employee extends Person {
  constructor(
    name,
    email,
    salary,
    isManager,
    money,
    sleepMood,
    healthRate,
    workMood
  ) {
    super(name, money, sleepMood, healthRate);
    this.id = email;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary;
    this.isManager = isManager;
  }

  work(hours) {
    if (hours === 8) {
      this.workMood = "happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empId) {
    const employee = this.employees.find((emp) => emp.id === empId);
    if (employee) {
      return employee;
    } else {
      return "Employee not found";
    }
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    const index = this.employees.findIndex((emp) => emp.id === empId);
    if (index !== -1) {
      this.employees.splice(index, 1);
      return "Employee fired successfully";
    } else {
      return "Employee not found";
    }
  }
}
const office = new Office();

function addEmployee(manager) {
  const name = prompt("Enter name:");
  const email = prompt("Enter email:");
  let salary = prompt("Enter salary (should be >= 1000):");
  let employee;
  while (salary < 1000) {
    salary = prompt("Enter salary:");
  }
  if (manager === "nrml") {
    employee = new Employee(name, email, salary, false);
  } else {
    employee = new Employee(name, email, salary, true);
  }
  office.hire(employee);
  userInput();
}

function displayEmployees() {
  const employees = office.getAllEmployees();
  let salary;
  if (employees) {
    employees.forEach((employee) => {
      if (employee.isManager) {
        salary = "****";
      } else {
        salary = employee.salary;
      }
      alert(
        `Name: ${employee.name}\nEmail: ${employee.email}\nSalary: ${salary}`
      );
    });
  } else {
    alert("No employees yet");
  }
  userInput();
}

function userInput() {
  let choice = prompt(
    "For adding a normal employee Enter 'nrml': \nFor adding a new manager Enter 'mngr': \nEnter 'display' to display all employees \nEnter 'q' to exit"
  );

  switch (choice) {
    case "mngr":
      addEmployee("mngr");
      break;
    case "nrml":
      addEmployee("nrml");
      break;
    case "display":
      displayEmployees();
      break;
    case "q":
      break;
    default:
      alert("Wrong choice");
      userInput();
      break;
  }
}

userInput();
