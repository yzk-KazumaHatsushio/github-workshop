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
});

describe('run', () => {
  test('prints expected 1..20 example', () => {
    const expected = [
      '1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz',
      '11','Fizz','13','14','FizzBuzz','16','17','Fizz','19','Buzz'
    ].join('\n');
    expect(run(1,20)).toBe(expected);
  });
});
