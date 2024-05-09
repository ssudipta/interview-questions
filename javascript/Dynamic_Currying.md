# interview-questions

add(2)(3)() => 5
add(2)(3)(4)() => 9

Asked in HDFC Securities

```javascript

function add(initialValue) {
  // This will store the running total
  let total = initialValue;

  // Recursive function that accumulates the arguments
  function accumulator(value) {
    if (value === undefined) {
      // When called without an argument, return the total
      return total;
    } else {
      // Otherwise, add the current value to the total and return the function to allow further chaining
      total += value;
      return accumulator;
    }
  }

  return accumulator;
}

// Example Usage:
console.log(add(2)(3)()); // Output: 5
console.log(add(2)(3)(4)()); // Output: 9
console.log(add(1)(1)(1)(1)(1)(1)()); // Output: 6

```