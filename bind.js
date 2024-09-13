// Polyfill for bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, args.concat(newArgs));
  };
};

const person = {
  name: "Siddhartha",
};

function sayHello(greeting) {
  return `${greeting} ${this.name}`;
}

const sayHelloToPerson = sayHello.myBind(person);
console.log(sayHelloToPerson("Hello"));
