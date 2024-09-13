// Polyfill for call
Function.prototype.myCall = function (context, ...args) {
  console.log("this", this);
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

const person = {
  name: "Siddhartha",
};

function sayHello(greeting) {
  return `${greeting} ${this.name}`;
}

console.log(sayHello.myCall(person, "Hello"));
