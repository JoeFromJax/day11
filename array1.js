const mixedArray = [420, 'abc', true, 'def', false, 69];

// a) Create a new array consisting only of the strings in the array, then sort that array alphabetically ascending (A-Z).
const stringArray = mixedArray.filter(function(element) {
  return typeof element === 'string';
}).sort();
console.log(stringArray); // ['abc', 'def']

// b) Create a new array consisting only of the numbers in the array, and then sort them ascending.
const numberArray = mixedArray.filter(function(element) {
  return typeof element === 'number';
}).sort(function(a, b) {
  return a - b;
});
console.log(numberArray); // [420, 69]

// c) Create a new array consisting only of the numbers in the array, and then sort them descending.
const numberArrayDescending = mixedArray.filter(function(element) {
  return typeof element === 'number';
}).sort(function(a, b) {
  return b - a;
});
console.log(numberArrayDescending); // [69, 420]

// d) Create a new array consisting only of the strings in the array, but lowercase all the strings.
const lowercaseStringArray = mixedArray.filter(function(element) {
  return typeof element === 'string';
}).map(function(string) {
  return string.toLowerCase();
});
console.log(lowercaseStringArray); // ['abc', 'def']
