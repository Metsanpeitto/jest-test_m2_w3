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
module.exports = count;
