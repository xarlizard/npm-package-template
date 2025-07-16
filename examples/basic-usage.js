// Example: Basic Node.js usage
const {
  greet,
  asyncGreet,
  ExampleClass,
  isProduction,
} = require('npm-package-template');

console.log('=== Basic Usage Examples ===');

// Simple greeting
console.log(greet('World'));

// Async greeting
asyncGreet('Async World').then(message => {
  console.log(message);
});

// Using the example class
const example = new ExampleClass('initial value');
console.log('Class getValue():', example.getValue());
example.setValue('new value');
console.log('Class after setValue():', example.getValue());

// Environment detection
console.log('Is production?', isProduction());

// Error handling example
try {
  const result = greet(''); // Empty string is valid but might not be desired
  console.log('Empty string result:', result);
} catch (error) {
  console.error('Error:', error.message);
}
