const { fizzBuzz, run } = require('./fizzbuzz');

describe('fizzBuzz', () => {
  test('returns numbers as strings', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(2)).toBe('2');
  });

  test('returns Fizz for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('returns Buzz for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('returns FizzBuzz for multiples of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  test('throws error for non-number input', () => {
    expect(() => fizzBuzz('a')).toThrow('Input must be a number');
    expect(() => fizzBuzz(NaN)).toThrow('Input must be a number');
  });
});

describe('run', () => {
  test('prints expected 1..20 example', () => {
    const expected = [
      '1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz',
      '11','Fizz','13','14','FizzBuzz','16','17','Fizz','19','Buzz'
    ].join('\n');
    expect(run(1,20)).toBe(expected);
  });

  test('performance test with 100,000 numbers', () => {
    const iterations = 3;
    let totalTime = 0;
    
    for (let j = 0; j < iterations; j++) {
      const start = performance.now();
      const result = run(1, 100000);
      const elapsed = performance.now() - start;
      totalTime += elapsed;
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    }
    
    const avgTime = Math.round(totalTime / iterations);
    console.log(`Performance test (100,000) - Average: ${avgTime}ms over ${iterations} runs`);
    
    // Should complete in reasonable time (less than 1 second per run on average)
    expect(avgTime).toBeLessThan(1000);
  });

  test('performance test with 1,000,000 numbers', () => {
    const start = performance.now();
    const result = run(1, 1000000);
    const elapsed = performance.now() - start;
    
    console.log(`Performance test (1,000,000): ${Math.round(elapsed)}ms`);
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    // Should complete in reasonable time (less than 10 seconds)
    expect(elapsed).toBeLessThan(10000);
  });
});
