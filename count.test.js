const { expect } = require("@jest/globals");
const count = require("./count");

test("The string is longer than 1 character and not longer than 10", () => {
  expect(count("a")).toBe(false);
  expect(count("is ok")).toBe(true);
  expect(count("this sentence has more than ten letters")).toBe(false);
});
