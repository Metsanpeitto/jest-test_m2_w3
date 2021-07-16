const { expect } = require('@jest/globals');
const { capitalize } = require('.');

test('The string output is the introduced one, but capitalized', () => {
  // Arrange
  const stringsToTest = [
    1,
    'a',
    'Is ok',
    'this sentence has more than ten letters',
  ];

  // Act
  stringsToTest.forEach((s) => {
    if (typeof s === 'string') {
      // Assert
      const expected = s.charAt(0).toUpperCase() + s.slice(1);
      expect(capitalize(s)).toBe(expected);
    } else {
      expect(capitalize(s)).toBe(null);
    }
  });
});
