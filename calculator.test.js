const { expect, describe } = require('@jest/globals');
const { calculator } = require('.');

describe('Calculator does simple aritmethic operations as ', () => {
  describe('Add operation', () => {
    test('given two numbers 2 + 2', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });

    test('given two numbers, one of them negative -2 + 2', () => {
      expect(calculator.add(-2, 2)).toBe(0);
    });
    test("given two values, one of them Nan '-' + 2", () => {
      expect(calculator.add('-', 2)).toBe('-2');
    });
  });

  describe('Substract operation', () => {
    test('given two numbers 4 - 2', () => {
      expect(calculator.substract(4, 2)).toBe(2);
    });

    test('given two numbers, one of them negative -2 + 2', () => {
      expect(calculator.substract(-2, 2)).toBe(-4);
    });
    test("given two values, one of them Nan '-' + 2", () => {
      expect(calculator.substract('-', 2)).toBe(NaN);
    });
  });

  describe('Multiply operation', () => {
    test('given two numbers 4 x 2', () => {
      expect(calculator.multiply(4, 2)).toBe(8);
    });

    test('given two numbers, one of them negative -2 x 2', () => {
      expect(calculator.multiply(-2, 2)).toBe(-4);
    });
    test("given two values, one of them Nan '-' x 2", () => {
      expect(calculator.multiply('-', 2)).toBe(NaN);
    });
  });
});
