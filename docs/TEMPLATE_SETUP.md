# Template Setup Guide

Follow these steps to customize this template for your package:

## 1. Templates Folder

The `templates/` folder contains blank starter files for your new package. Start by copying these files into your project root and filling them out with your own information:

- `README.md`: Your package's main documentation. Update with your package name, usage, and details.
- `CHANGELOG.md`: Track changes and releases for your package. Follow semantic versioning and keep a changelog format.
- `CONTRIBUTING.md`: Guidelines for contributing to your package. Add your contribution rules and process.
- `LICENSE`: Your package's license (default is MIT). Update with your name and year if needed.
- `package.json`: Example configuration to start from. Replace all placeholders (`YOUR_USERNAME`, `YOUR_PACKAGE_NAME`, etc.) with your actual info.
- `dependabot.yml`: Example Dependabot configuration for automated dependency updates. Update reviewers/assignees as needed.

Copy and edit these files as needed to match your package's requirements. Do not edit the template's own files—always start from the ones in `templates/`.

## 2. Package Information

Update the copied `package.json` from `templates/` with your actual information:

- `YOUR_USERNAME` → Your GitHub username
- `YOUR_PACKAGE_NAME` → Your package name
- `YOUR_NAME` → Your name
- `your.email@example.com` → Your email

### Key fields to update:

```json
{
  "name": "your-package-name",
  "description": "Your package description",
  "repository": {
    "url": "git+https://github.com/YOUR_USERNAME/YOUR_PACKAGE_NAME.git"
  },
  "homepage": "https://github.com/YOUR_USERNAME/YOUR_PACKAGE_NAME#readme",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/YOUR_PACKAGE_NAME/issues"
  },
  "author": {
    "name": "YOUR_NAME",
    "email": "your.email@example.com",
    "url": "https://github.com/YOUR_USERNAME"
  },
  "keywords": ["add", "relevant", "keywords"]
}
```

## 3. GitHub Repository Setup

### Required Secrets

Add these to your GitHub repository settings → Secrets and variables → Actions:

- `NPM_TOKEN`: Get from npmjs.com → Access Tokens → Generate New Token

### Repository Settings

- Enable GitHub Packages in repository settings
- Set up branch protection rules for main branch
- Configure issue templates (optional)

## 4. Code Structure

### Main Entry Point

Update `src/index.ts` with your actual exports:

```typescript
// Replace example functions with your actual code
export { yourMainFunction } from './your-module';
export * from './types';
```

### Types

Update `src/types.ts` with your actual type definitions.

### Tests

Update tests in `src/__tests__/` to match your actual functions.

## 5. Documentation

### README.md (from `templates/README.md`)
- Update title and description
- Replace feature list with your actual features
- Update installation instructions
- Add your API documentation
- Update examples

### CHANGELOG.md (from `templates/CHANGELOG.md`)
- Keep the format but update with your actual changes
- Follow semantic versioning

### CONTRIBUTING.md (from `templates/CONTRIBUTING.md`)
- Add your contribution guidelines and process

### LICENSE (from `templates/LICENSE`)
- Update with your name and year if needed

### dependabot.yml (from `templates/dependabot.yml`)
- Update reviewers and assignees to your GitHub username or team

### Examples

- Replace `examples/README.md` with actual usage examples
- Add code samples for common use cases

## 6. Configuration

### Dependencies

Remove or add dependencies based on your needs:

```bash
# Remove unused dependencies
npm uninstall package-name

# Add new dependencies
npm install package-name
npm install --save-dev dev-package-name
```

### Build Configuration

Update `rollup.config.js` if you need different build settings:

- External dependencies
- Additional plugins
- Different output formats

### Testing

Update `jest.config.json` if you need different test settings:

- Test patterns
- Coverage settings
- Setup files

## 7. Publishing

### First Release

1. Update version in package.json to 1.0.0
2. Update CHANGELOG.md with initial release notes
3. Create a git tag: `git tag v1.0.0`
4. Push tag: `git push origin v1.0.0`
5. Create GitHub release from the tag

### Automated Publishing

The workflow will automatically:

- Run tests and build
- Publish to NPM registry
- Publish to GitHub Packages with `@YOUR_USERNAME/YOUR_PACKAGE_NAME` scope

## 8. Cleanup

After customization:

1. Delete this file (`TEMPLATE_SETUP.md`)
2. Remove example code from `src/index.ts`
3. Update or remove example tests
4. Remove placeholder content from README.md

## 9. Optional Enhancements

### Add More Tools

- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Commitizen**: Conventional commits
- **Semantic Release**: Automated versioning

### Add More Workflows

- **CodeQL**: Security scanning
- **Dependabot**: Dependency updates
- **Stale**: Close stale issues

### Documentation

- **API documentation**: TSDoc + documentation generator
- **GitHub Wiki**: Extended documentation
- **GitHub Pages**: Package website

## 10. Protect Main Branch

To ensure repository safety and code quality, add the ruleset from `templates/Protect main.json` to your repository settings. This will:
- Protect the `main` branch from direct commits and force pushes
- Require all changes to go through pull requests
- Enforce best practices for collaboration and code review

Follow GitHub's documentation to import the ruleset and apply it to your repository.

## Need Help?

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify your NPM token is valid
3. Ensure repository permissions are correct
4. Check package.json configuration

Happy packaging! 🚀
