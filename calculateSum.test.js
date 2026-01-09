const calculateSum = require('./calculateSum');

test('calculateSum adds two numbers', () => {
  expect(calculateSum(1, 2)).toBe(3);
  expect(calculateSum(-1, 1)).toBe(0);
});
