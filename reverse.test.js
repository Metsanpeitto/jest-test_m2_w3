const { expect } = require('@jest/globals');
const { reverse } = require('.');

test('The result must be the reversed of the input string', () => {
  // Arrange
  const stringsToTest = [
    null,
    'a',
    'is ok',
    'this sentence has more than ten letters',
  ];

  const result = [
    null,
    'a',
    'ko si',
    'srettel net naht erom sah ecnetnes siht',
  ];

  // Act
  stringsToTest.forEach((s, index) => {
    // Assert
    if (s === null) {
      expect(reverse(s)).toBe(result[index]);
    } else {
      expect(reverse(s)).toBe(result[index]);
    }
  });
});
