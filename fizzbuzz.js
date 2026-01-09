// Simple, readable FizzBuzz implementation
// Prints FizzBuzz results for numbers in a range (inclusive).

function fizzBuzz(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

function run(start, end) {
  const results = [];
  for (let i = start; i <= end; i++) {
    results.push(fizzBuzz(i));
  }
  return results.join('\n');
}

// If this file is run directly, print 1..20 as requested.
if (require.main === module) {
  console.log(run(1, 20));
}

module.exports = { fizzBuzz, run };
