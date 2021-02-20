let boolean_false = false;
let boolean_true = true;

if (boolean_false) {
  // this block will not execute
}

if (boolean_true) {
  // this block will execute
}

// any undeclared, null or undefined value is converted to falsy
//
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
