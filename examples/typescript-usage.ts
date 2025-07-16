// Example: TypeScript usage with full type support
import {
    greet,
    asyncGreet,
    ExampleClass,
    isProduction,
    ExampleConfig,
    GreetingType,
    GreetingResult,
    ApiResponse
} from 'npm-package-template';

console.log('=== TypeScript Usage Examples ===');

// Basic function calls with type safety
const message: string = greet('TypeScript');
console.log('Typed greeting:', message);

// Async function with proper typing
const asyncMessage: Promise<string> = asyncGreet('TypeScript Async');
asyncMessage.then((msg: string) => {
    console.log('Async result:', msg);
});

// Class usage with types
const typedExample: ExampleClass = new ExampleClass('typed value');
const value: string = typedExample.getValue();
console.log('Typed class value:', value);

// Using interfaces and types
const config: ExampleConfig = {
    name: 'TypeScript User',
    async: true,
    prefix: 'Hello'
};

console.log('Config:', config);

// Using enums
const greetingType: GreetingType = GreetingType.FRIENDLY;
console.log('Greeting type:', greetingType);

// Using generic types
const apiResponse: ApiResponse<string> = {
    data: 'Success message',
    success: true
};

console.log('API Response:', apiResponse);

// Creating a result object
const result: GreetingResult = {
    message: greet(config.name),
    timestamp: new Date(),
    config: config
};

console.log('Greeting result:', result);

// Environment check with type safety
const isProd: boolean = isProduction();
console.log('Production environment:', isProd);

// Error handling with types
async function safeAsyncGreet(name: string): Promise<string | null> {
    try {
        return await asyncGreet(name);
    } catch (error) {
        console.error('Error in async greeting:', error);
        return null;
    }
}

safeAsyncGreet('Error Test').then(result => {
    console.log('Safe async result:', result);
});
