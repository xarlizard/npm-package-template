import { greet, asyncGreet, ExampleClass } from '../index';

describe('Package Main Functions', () => {
    describe('greet', () => {
        it('should return a greeting message', () => {
            const result = greet('World');
            expect(result).toBe('Hello, World! This is your npm package template.');
        });

        it('should handle empty string', () => {
            const result = greet('');
            expect(result).toBe('Hello, ! This is your npm package template.');
        });
    });

    describe('asyncGreet', () => {
        it('should return a greeting message asynchronously', async () => {
            const result = await asyncGreet('Async World');
            expect(result).toBe('Hello async, Async World!');
        });

        it('should resolve within reasonable time', async () => {
            const start = Date.now();
            await asyncGreet('Test');
            const end = Date.now();
            expect(end - start).toBeLessThan(200);
        });
    });

    describe('ExampleClass', () => {
        it('should initialize with a value', () => {
            const instance = new ExampleClass('test');
            expect(instance.getValue()).toBe('test');
        });

        it('should update value correctly', () => {
            const instance = new ExampleClass('initial');
            instance.setValue('updated');
            expect(instance.getValue()).toBe('updated');
        });
    });
});