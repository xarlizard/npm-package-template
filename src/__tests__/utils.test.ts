import { isProduction } from '../utils';

describe('utils', () => {
    describe('isProduction', () => {
        const originalEnv = process.env;

        beforeEach(() => {
            jest.resetModules();
            process.env = { ...originalEnv };
        });

        afterAll(() => {
            process.env = originalEnv;
        });

        it('should return true when NODE_ENV is production', () => {
            process.env.NODE_ENV = 'production';
            expect(isProduction()).toBe(true);
        });

        it('should return false when NODE_ENV is development', () => {
            process.env.NODE_ENV = 'development';
            expect(isProduction()).toBe(false);
        });

        it('should return false when NODE_ENV is not set', () => {
            delete process.env.NODE_ENV;
            expect(isProduction()).toBe(false);
        });
    });
});