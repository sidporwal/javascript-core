// Polyfill for apply
Function.prototype.myApply = function (context, args) {
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

console.log(sayHello.myApply(person, ["Hello"]));
