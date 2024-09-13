function isArray1(value) {
  // ECMAScript 5 feature
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }
  return false;
}

function isArray2(value) {
  return value.constructor.name === "Array";
}

function isArray3(value) {
  return value instanceof Array;
}

function isArray4(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

console.log(isArray1([])); // true
console.log(isArray2([])); // true
console.log(isArray3([])); // true
console.log(isArray4([])); // true
