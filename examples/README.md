# Usage Examples

This directory contains examples of how to use the npm package template.

## Basic Usage

```typescript
import { greet, asyncGreet, ExampleClass } from 'your-package-name';

// Simple greeting
const message = greet('World');
console.log(message); // "Hello, World! This is your npm package template."

// Async greeting
asyncGreet('Async World').then(message => {
  console.log(message); // "Hello async, Async World!"
});

// Using the example class
const example = new ExampleClass('initial value');
console.log(example.getValue()); // "initial value"
example.setValue('new value');
console.log(example.getValue()); // "new value"
```

## With TypeScript

```typescript
import { ExampleConfig, GreetingType, ApiResponse } from 'your-package-name';

// Using interfaces
const config: ExampleConfig = {
  name: 'TypeScript User',
  async: true,
  prefix: 'Hi',
};

// Using enums
const type = GreetingType.FRIENDLY;

// Using generic types
const response: ApiResponse<string> = {
  data: 'Hello World',
  success: true,
};
```

## Node.js Example

```javascript
const { greet, isProduction } = require('your-package-name');

console.log(greet('Node.js'));
console.log('Production mode:', isProduction());
```

## Replace This Content

When using this template:

1. Replace these examples with your actual package examples
2. Add real-world usage scenarios
3. Include configuration examples
4. Add troubleshooting guides
5. Include performance considerations
