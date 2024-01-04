function Person(name, money, sleepMood, healthRate) {
  this.fullName = name;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}

Person.prototype.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours < 7) {
    this.sleepMood = "tired";
  } else {
    this.sleepMood = "lazy";
  }
};

Person.prototype.eat = function (meals) {
  if (meals === 3) {
    this.healthRate = 100;
  } else if (meals === 2) {
    this.healthRate = 75;
  } else if (meals === 1) {
    this.healthRate = 50;
  }
};

Person.prototype.buy = function (items) {
  this.money -= items * 10;
};

let person1 = new Person("Omar Ahmed", 1000, "happy", 80);
person1.sleep(7);
console.log(person1.sleepMood);
person1.eat(3);
console.log(person1.healthRate);
person1.buy(1);
console.log(person1.money);

/****** Classes *****/
class Person2 {
  constructor(name, money, sleepMood, healthRate) {
    this.fullName = name;
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

let person2 = new Person2("Omar Ahmed", 1000, "happy", 80);
person2.sleep(10);
console.log(person2.sleepMood);
person2.eat(2);
console.log(person2.healthRate);
person2.buy(2);
console.log(person2.money);

/***** OLOO ******/
const Person3 = {
  init(name, money, sleepMood, healthRate) {
    this.fullName = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    return this;
  },

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  },

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  },

  buy(items) {
    this.money -= items * 10;
  },
};

let person3 = Object.create(Person3).init("Omar Ahmed", 1000, "happy", 80);
person3.sleep(7);
console.log(person3.sleepMood);
person3.eat(1);
console.log(person3.healthRate);
person3.buy(3);
console.log(person3.money);

/****** Factory functions ******/
function createPerson(name, money, sleepMood, healthRate) {
  return {
    fullName: name,
    money: money,
    sleepMood: sleepMood,
    healthRate: healthRate,

    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours < 7) {
        this.sleepMood = "tired";
      } else {
        this.sleepMood = "lazy";
      }
    },

    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },

    buy(items) {
      this.money -= items * 10;
    },
  };
}

let person4 = createPerson("Omar Ahmed", 1000, "happy", 80);
person4.sleep(2);
console.log(person4.sleepMood);
person4.eat(1);
console.log(person4.healthRate);
person4.buy(3);
console.log(person4.money);
