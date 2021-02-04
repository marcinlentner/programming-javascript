let boolean_val = false;

if (boolean_val) {
  // this block will not execute
}

// any undeclared, null or undefined value is converted to falsy
// let undeclared_value;
// if (undeclared_value) {
//   // ERROR!
//   // this block will not execute
// }

let undefined_value; // has value of undefined
// aka
let undefined_value_defined = undefined;

if (undefined_value) {
  // this block will not execute
}

if (undefined_value == undefined_value_defined) {
  // this block will execute
}

let string_val = "";

if (string_val) {
  // this block will not execute
}

// define object to be used later
let object_val = null;

if (object_val) {
  // this block will not execute
}

// empty object is truthy
object_val = {};

if (object_val) {
  // this block will execute
}
