const calculateSum = require('./calculateSum');

test('calculateSum adds two numbers', () => {
  expect(calculateSum(1, 2)).toBe(3);
  expect(calculateSum(-1, 1)).toBe(0);
});

test('performance test with large numbers', () => {
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    calculateSum(123456789, 987654321);
  }
  const elapsed = Date.now() - start;
  
  console.log(`Performance test (10,000,000 iterations): ${elapsed}ms`);
  expect(elapsed).toBeLessThan(1000);
});
