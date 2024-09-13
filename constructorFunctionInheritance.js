function Person(name, age, salary) {
  this.name = name || "Siddhartha";
  this.age = age;
  this.salary = salary;
  this.incrementSalary = function (byValue) {
    this.salary = this.salary + byValue;
  };
}

function Employee(company) {
  this.company = company;
}

// Method1: Prototype Inheritance
Employee.prototype = new Person("Siddhartha", 25, 10000);

var emp1 = new Employee("Google");

console.log(emp1 instanceof Person); // true
console.log(emp1 instanceof Employee); // true

var obj = {};

// Method2: Constructor Inheritance
// obj inherit Person class properties and method
Person.call(obj, "Shivam", 29, 20000); // constructor inheritance

console.log(obj); // Object { name: "Shivam", age: 29, salary: 20000, incrementSalary: incrementSalary() }
