// Simple, readable FizzBuzz implementation
// Prints FizzBuzz results for numbers in a range (inclusive).

function fizzBuzz(n) {
  // Check type first to avoid redundant isNaN evaluation for non-numbers
  if (typeof n !== 'number') {
    throw new Error('Input must be a number');
  }
  // Check for NaN (typeof NaN === 'number', but it's still invalid)
  if (isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

function run(start, end) {
  const count = end - start + 1;
  const results = new Array(count);
  for (let i = start; i <= end; i++) {
    results[i - start] = fizzBuzz(i);
  }
  return results.join('\n');
}

// If this file is run directly, print 1..20 as requested.
if (require.main === module) {
  console.log(run(1, 20));
}

module.exports = { fizzBuzz, run };
