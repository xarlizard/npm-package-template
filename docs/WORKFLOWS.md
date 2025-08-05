# Publish Workflow (`.github/workflows/publish.yml`)

## Purpose

Publishes the package to npm and GitHub Packages when a release is published or the workflow is manually triggered.

## When It Runs

- On GitHub release publish events.
- On manual dispatch (with version selection).

## What It Does

- Runs all tests, linting, and build steps.
- Publishes to npm, first trying the unscoped name, then retrying with a scoped name using the GitHub username if
  needed.
- Publishes to GitHub Packages with the correct dynamic scope and repo name.
- All package names and scopes are inferred from the repository context.

## Usage

- No hardcoded package names. The workflow is reusable for any repo.
- To use, create a release or trigger the workflow manually from the Actions tab.

# CI Workflow (`.github/workflows/ci.yml`)

## Purpose

This workflow runs continuous integration (CI) checks for the repository. It ensures code quality, correctness, and
compatibility across Node.js versions before merging or releasing changes.

## When It Runs

- On every push or pull request to the `main` or `develop` branches.

## What It Does

- Installs dependencies and runs linting, type checking, and tests with coverage.
- Builds the package.
- Dynamically tests package installation and import for both CommonJS and ES Module consumers, inferring the package
  name from the repository.
- Uploads coverage to Codecov (for Node 18).

## Usage

- No configuration needed. The workflow is fully reusable and dynamically infers the package name from the repository
  context.
- To customize Node.js versions or add steps, edit `.github/workflows/ci.yml`.

# Security Workflow (`.github/workflows/security.yml`)

## Purpose

Runs security analysis on the codebase using GitHub CodeQL and dependency review.

## When It Runs

- On push or pull request to `main`.
- On a weekly schedule (Monday 2 AM UTC).

## What It Does

- Runs CodeQL static analysis for JavaScript.
- Performs dependency review to check for vulnerable dependencies.

## Usage

- No configuration needed. The workflow is reusable and works for any JavaScript/TypeScript repo.
- To customize languages or schedule, edit `.github/workflows/security.yml`.

# Deploy Workflow (`.github/workflows/deploy.yml`)

## Purpose

Marks production deployments in the GitHub UI for visibility. Does not perform any real deployment by default—add your own deployment steps as needed.

## When It Runs

- On every push to the `main` branch.

## What It Does

- Sets the environment to `production` and displays a deployment badge in the GitHub UI.
- Includes a placeholder step for deployment (customize as needed).

## Usage

- To use, push to the `main` branch. The badge will update automatically.
- Customize the workflow to add real deployment steps if required, and seet the URL to your desired deployment URL.
