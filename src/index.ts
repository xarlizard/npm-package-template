/**
 * NPM Package Template
 * A comprehensive TypeScript npm package template
 */

export { isProduction } from './utils';
export * from './types';

/**
 * Main package functionality - replace with your actual code
 */
export function greet(name: string): string {
    return `Hello, ${name}! This is your npm package template.`;
}

/**
 * Example async function
 */
export async function asyncGreet(name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello async, ${name}!`);
        }, 100);
    });
}

/**
 * Example class
 */
export class ExampleClass {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }
}