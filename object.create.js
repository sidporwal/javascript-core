const employee = {
  name: "Nishant",
  displayName: function () {
    console.log(this.name);
  },
};

const emp1 = Object.create(employee);
console.log(emp1.displayName()); // output "Nishant"

emp1.displayName = function () {
  console.log("xyz-Anonymous");
};

employee.displayName(); //Nishant
emp1.displayName(); //xyz-Anonymous

var emp2 = Object.create(employee, {
  name: {
    value: "John",
  },
});

emp2.displayName(); // "John"
employee.displayName(); // "Nishant"
