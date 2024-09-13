const curryAdd = (...args) => {
  return function add(...args2) {
    if (args2.length === 0) {
      return args.reduce((acc, cur) => acc + cur, 0);
    }
    return curryAdd(...args, ...args2);
  };
};

console.log(curryAdd(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)());

let sum = (a, b, c) => a + b + c;

const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
};

let curryAdd2 = curry(sum);

// console.log(curryAdd2(1, 2, 3));
// console.log(curryAdd2(1)(2)(3));
// console.log(curryAdd2(1)(2, 3));
// console.log(curryAdd2(1, 2)()()()(3));
console.log(curryAdd2(1, 2)()(3)()());
// console.log(curryAdd2(1)()(2)()); // Should print insufficent arguments
// console.log(curryAdd2(1)()(2, 3)()(4)); // Should print exceeding arguments
