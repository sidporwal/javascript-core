console.log("NaN === NaN", NaN === NaN); // false
console.log(
  NaN < 2, // false
  NaN > 2, // false
  NaN === 2 // false
);
console.log(Math.sqrt(-5));
console.log(Math.log(-1));
console.log(
  parseFloat("foo")
); /* this is common: you get JSON from the server, convert some strings from JSON to a number and end up with NaN in your UI. */
