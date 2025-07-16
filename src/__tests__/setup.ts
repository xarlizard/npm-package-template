/**
 * Jest setup file
 * Add global test configuration here
 */

import { beforeEach, afterEach, afterAll, jest } from '@jest/globals';

// Mock console methods if needed
global.console = {
    ...console,
    // Uncomment to suppress console.log in tests
    // log: jest.fn(),
    // error: jest.fn(),
    // warn: jest.fn(),
};

// Set up any global test utilities
beforeEach(() => {
    // Reset any global state before each test
    jest.clearAllMocks();
});

afterEach(() => {
    // Clean up after each test
    jest.restoreAllMocks();
});

// Ensure proper cleanup to prevent worker process issues
afterAll(() => {
    // Force cleanup of any remaining handles
    jest.clearAllTimers();
});