const preventExtensions = () => {
  console.log("preventExtensions");
  const employee = {
    name: "Nishant",
  };

  // lock the object
  Object.preventExtensions(employee);

  // Now try to change the employee object property name
  employee.name = "John"; // work fine

  //Now try to add some new property to the object
  employee.age = 24; // fails silently unless it's inside the strict mode

  console.log(employee); // { name: 'John' }

  delete employee.name; // work fine
  console.log(employee); // {}
};

preventExtensions();

const sealObject = () => {
  console.log("sealObject");

  const employee = {
    name: "Nishant",
  };

  // Seal the object
  Object.seal(employee);

  console.log(Object.isExtensible(employee)); // false
  console.log(Object.isSealed(employee)); // true

  employee.name = "John"; // work fine
  delete employee.name; // fails silently unless it's in strict mode

  // Trying to add new property will give an error
  employee.age = 30; // fails silently unless in strict mode

  console.log(employee); // { name: 'John' }
};

sealObject();

const freezeObject = () => {
  console.log("freezeObject");

  const employee = {
    name: "Nishant",
  };

  //Freeze the object
  Object.freeze(employee);

  console.log(Object.isExtensible(employee)); // false
  console.log(Object.isSealed(employee)); // true
  console.log(Object.isFrozen(employee)); // true

  employee.name = "xyz"; // fails silently unless in strict mode
  employee.age = 30; // fails silently unless in strict mode
  delete employee.name; // fails silently unless it's in strict mode

  console.log(employee); // { name: 'Nishant' }
};

freezeObject();
