/** --  Task n1  --
 *
 *  -Write a function stringLength(string) that takes any string as an argument and
 *  returns its characters count.
 *
 *  -Now write a test for this function.
 *
 *  -Next, expand your function to make it check if the string is at least 1 character
 *  long and not longer than 10 characters.
 *
 *  -Throw errors if those conditions are not met.
 *
 *  -Add tests for the new functionality.
 */

function count(str) {
  const { length } = str;
  let result = false;

  if (length >= 1 && length <= 10) {
    result = true;
  }

  return result;
}

/* Task 2
- Write a function *reverseString(string)* function. It should take a string as an argument
  and return it reversed.

- Write at least one test for this function.
*/

function reverse(str) {
  let result = null;
  if (str !== null) {
    const splittedStr = str.split("");
    const reversed = splittedStr.reverse();
    result = reversed.join("");
  }
  return result;
}

/** Task 3
Write a simple calculator class or object, which will have 4
methods: add, subtract, divide, and multiply.
*/

class Calculator {
  constructor() {
    this.result = null;
  }

  add(value1, value2) {
    this.result = value1 + value2;
    return this.result;
  }

  substract(value1, value2) {
    this.result = value1 - value2;
    return this.result;
  }

  divide(value1, value2) {
    this.result = value1 / value2;
    return this.result;
  }

  multiply(value1, value2) {
    this.result = value1 * value2;
    return this.result;
  }
}

const calculator = new Calculator();

/**  Task 4 tThe function takes a string as an argument and returns that string
 *    with the first character capitalized.                           */

function capitalize(str) {
  let result;
  if (typeof str === "string") {
    result = str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    result = null;
  }
  return result;
}

module.exports = {
  count,
  reverse,
  calculator,
  capitalize,
};
