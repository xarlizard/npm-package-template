# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously and appreciate your efforts to responsibly disclose security vulnerabilities.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by:

1. **GitHub Security Advisory**: Use GitHub's private vulnerability reporting feature
2. **Direct Message**: Contact the maintainer directly via GitHub

### What to Include

When reporting a vulnerability, please include:

- **Description**: A clear description of the vulnerability
- **Impact**: What could happen if this vulnerability is exploited
- **Reproduction**: Step-by-step instructions to reproduce the issue
- **Environment**: Node.js version, package version, and operating system
- **Code Sample**: Minimal code example demonstrating the issue (if applicable)

### Response Timeline

We aim to respond to security reports within:

- **Initial Response**: 48 hours
- **Status Update**: 7 days
- **Resolution**: 30 days (for confirmed vulnerabilities)

### Security Considerations for Users

When using this npm package in your applications:

#### General Security Best Practices

1. **Dependency Management**:

   ```bash
   # Keep dependencies updated
   npm audit
   npm update

   # Use npm ci in production
   npm ci --only=production
   ```

2. **Input Validation**:

   ```typescript
   // Always validate inputs when using package functions
   import { greet } from 'your-package-name';

   function safeGreet(input: unknown): string {
     if (typeof input !== 'string' || input.length > 100) {
       throw new Error('Invalid input');
     }
     return greet(input);
   }
   ```

3. **Error Handling**:
   ```typescript
   // Handle errors gracefully
   try {
     const result = await asyncGreet(userInput);
     return result;
   } catch (error) {
     console.error('Greeting failed:', error.message);
     return 'Hello, guest!';
   }
   ```

#### Common Security Pitfalls

- **Input Sanitization**: Always sanitize user inputs before processing
- **Dependency Vulnerabilities**: Regularly audit and update dependencies
- **Error Information Disclosure**: Don't expose sensitive information in error messages
- **Resource Limits**: Be aware of potential DoS through resource exhaustion

#### Dependencies

This package depends on:

- **TypeScript**: Development dependency only
- **Jest**: Development dependency only
- **ESLint**: Development dependency only

All runtime dependencies are kept to a minimum to reduce attack surface.

### Scope

This security policy covers:

- The React API Forge library code
- Build and release processes
- Documentation and examples

This policy does not cover:

- Your application's implementation using React API Forge
- Third-party services you connect to via the hooks
- Security issues in React, Axios, or other dependencies (report to respective projects)

### Recognition

We appreciate security researchers and will acknowledge your contribution (with your permission) in:

- Security advisory credits
- CHANGELOG.md mentions
- Hall of fame (if we create one)

Thank you for helping keep React API Forge and our community safe!
