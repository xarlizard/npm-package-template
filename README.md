# NPM Package Template 📦

[![npm version](https://badge.fury.io/js/npm-package-template.svg)](https://badge.fury.io/js/npm-package-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI/CD](https://github.com/xarlizard/npm-package-template/actions/workflows/publish.yml/badge.svg)](https://github.com/xarlizard/npm-package-template/actions/workflows/publish.yml)
[![Coverage](https://codecov.io/gh/xarlizard/npm-package-template/branch/main/graph/badge.svg)](https://codecov.io/gh/xarlizard/npm-package-template)

A comprehensive, production-ready TypeScript npm package template with automated publishing, testing, and modern
tooling.

> **⚡ Quick Start**: Click "Use this template" above to create your own npm package in seconds!

---

## ✨ Features

- **TypeScript Support**: Full TypeScript setup with declaration files
- **Modern Build System**: Rollup for optimized bundling (ESM + CJS)
- **Automated Testing**: Jest with coverage reporting
- **Code Quality**: ESLint with TypeScript support
- **Automated Publishing**: GitHub Actions for NPM and GitHub Packages
- **Cross-Platform Scripts**: PowerShell and Node.js scripts
- **Security**: Security policy and vulnerability reporting
- **Documentation**: Comprehensive docs and examples
- **Dual Registry Support**: Publish to both NPM and GitHub Packages

---

## 📦 Using This Template

### Method 1: Use as GitHub Template

1. Click "Use this template" button on GitHub
2. Create your new repository
3. Clone and customize

### Method 2: Clone and Customize

```bash
git clone https://github.com/xarlizard/npm-package-template.git my-package
cd my-package
npm install
```

### Method 3: Install as Reference

```bash
npm install @xarlizard/npm-package-template --save-dev
```

## 📚 Repository File Reference

This section explains the purpose of every file and folder in this repository, so you know exactly what each part does.

### Root Files

```
├── .github/workflows/     # GitHub Actions
├── dist/                  # Built files (generated)
├── docs/                  # Documentation files
├── examples/              # Usage examples
├── scripts/               # Build and release scripts
│   ├── dev.ps1            # Development tasks (PowerShell)
│   ├── release.ps1        # Release script (PowerShell)
│   └── release.js         # Release script (Node.js)
├── src/                   # Source code
│   ├── __tests__/         # Test files
│   ├── index.ts           # Main entry point
│   ├── types.ts           # Type definitions
│   └── utils.ts           # Utility functions
├── .eslintrc.json         # ESLint configuration.
├── .gitignore             # Git ignore patterns.
├── .npmignore             # Files to exclude from NPM package.
├── .npmrc                 # NPM and GitHub Packages registry configuration.
├── .prettierignore        # Prettier ignore patterns.
├── .prettierrc.json       # Prettier configuration.
├── CHANGELOG.md           # Project change history.
├── CODE_OF_CONDUCT.md     # Contributor Covenant code of conduct.
├── CONTRIBUTING.md        # Contribution guidelines.
├── jest.config.json       # Jest testing configuration.
├── LICENSE                # MIT License.
├── package.json           # NPM package configuration.
├── README.md:             # Main project overview and file reference.
├── rollup.config.js       # Rollup build configuration.
├── SECURITY.md            # Security policy and vulnerability reporting.
└── tsconfig.json          # TypeScript configuration.
```

### Documentation (`docs/`)

- **DEPENDABOT.md**: Automated dependency updates via `.github/dependabot.yml`.
- **ISSUE_TEMPLATES.md**: Issue templates in `.github/ISSUE_TEMPLATE/`.
- **PULL_REQUEST_TEMPLATE.md**: Pull request template in `.github/pull_request_template.md`.
- **TEMPLATE_SETUP.md**: Step-by-step guide for customizing this template.
- **WORKFLOWS.md**: Details all GitHub Actions workflows in `.github/workflows/`.

### Source Code (`src/`)

- **index.ts**: Main entry point for the package.
- **types.ts**: TypeScript types and interfaces.
- **utils.ts**: Utility functions.
- \***\*tests**/\*\*: Unit tests for main functions and utilities.

### Examples (`examples/`)

- **README.md**: Usage examples overview.
- **basic-usage.js**: Node.js usage example.
- **typescript-usage.ts**: TypeScript usage example.

### Scripts (`scripts/`)

- **dev.ps1**: PowerShell script for development tasks.
- **release.js**: Node.js script for automated release.
- **release.ps1**: PowerShell script for publishing releases.
- **setup.js**: Node.js script for initial setup and validation.

### GitHub Configuration (`.github/`)

- **dependabot.yml**: Dependabot configuration.
- **pull_request_template.md**: Pull request template.
- **ISSUE_TEMPLATE/**: Issue templates for bug reports, documentation, and features.
- **workflows/**: GitHub Actions workflows for CI, publishing, and security.

---

## 🛠️ Setup & Customization

See [`docs/TEMPLATE_SETUP.md`](docs/TEMPLATE_SETUP.md) for a step-by-step guide to customizing this template for your
own package, including updating `package.json`, configuring secrets, and setting up your code.

---

## 🎯 Quick Start Development

```bash
# Install dependencies
npm install

# Development with all checks
npm run dev

# Individual tasks
npm run dev:build    # Build only
npm run dev:test     # Test only
npm run dev:lint     # Lint only
npm run dev:typecheck # Type check only

# Testing
npm run test
npm run test:watch
npm run test:coverage

# Building
npm run build

# Releasing
npm run release        # Patch version
npm run release:minor  # Minor version
npm run release:major  # Major version
```

---

## 🔧 Available Scripts

| Script                  | Description               |
| ----------------------- | ------------------------- |
| `npm run build`         | Build the package         |
| `npm run test`          | Run tests                 |
| `npm run test:watch`    | Run tests in watch mode   |
| `npm run test:coverage` | Run tests with coverage   |
| `npm run lint`          | Lint code                 |
| `npm run lint:fix`      | Fix linting issues        |
| `npm run typecheck`     | Type check code           |
| `npm run dev`           | Run all development tasks |
| `npm run release`       | Release patch version     |
| `npm run release:minor` | Release minor version     |
| `npm run release:major` | Release major version     |

---

## 🚀 Publishing

### Automated Publishing (Recommended)

1. Create a GitHub release
2. GitHub Actions will automatically:
   - Run tests
   - Build the package
   - Publish to NPM
   - Publish to GitHub Packages

### Manual Publishing

```bash
# Publish to NPM
npm publish

# Publish to GitHub Packages
npm config set @YOUR_USERNAME:registry https://npm.pkg.github.com
npm publish
```

---

## 🤝 Contributing to This Template

We welcome contributions! See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📄 License

This template is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

---

## 🙏 Acknowledgments

Includes best practices from:

- TypeScript team recommendations
- NPM packaging guidelines
- GitHub Actions community
- Open source community standards

---

**Happy packaging! 📦✨**

Made with ❤️ by [Xarlizard](https://www.github.com/xarlizard)
