// integer
let intNum = 12;
// intNum
// 12

/*
 * Numbers created using octal or hexadeximal format
 * are treated as desimal numbers in all arithmetic operations.
 */

// ocatal - first digit must be zero - not valid in strict mode
let octalNum = 014;
// ocatalTwelve
// 12

// hexadecimal - first 2 characters must be 0x
let hexadecimalNum = 0xc;

/*
 * Positive and Negative Zero are equal to zero
 */
let positiveZero = +0;
let negativeZero = -0;
let Zero = 0;

if (Zero == positiveZero) {
  console.log("equal");
}

if (Zero == negativeZero) {
  console.log("same");
}

/*
 * Floating-Point
 * Uses twice as much memory as integers
 */
let floatNum = 1.2;

// valid but not recommended
let floatNum2 = 0.2;

// JavaScript will convert automatically floats to integers if possibe
let floatNum3 = 12.0;

// e-notation is used for very large numbers, e1 is multiply by 10 (10*1), e2 is multiply by 100 (10*2), etc.
let floatNum4 = 1.2e1;
// 12
