const { expect } = require('@jest/globals');
const { count } = require('.');

test('The string is longer than 1 character and not longer than 10', () => {
  // Arrange
  const stringsToTest = [
    '',
    'a',
    'is ok',
    'this sentence has more than ten letters',
  ];

  // Act
  stringsToTest.forEach((s) => {
    // Assert
    if (s.length < 1) {
      expect(count(s)).toBe(false);
    }
    if (s.length >= 1 && s.length <= 10) {
      expect(count(s)).toBe(true);
    }
    if (s.length > 10) {
      expect(count(s)).toBe(false);
    }
  });
});
