#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Setting up npm package template...');

try {
  // Check if package.json exists
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error(
      '❌ package.json not found. Please run this script from the project root.'
    );
    process.exit(1);
  }

  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  console.log('📦 Package name:', packageJson.name);
  console.log('📝 Description:', packageJson.description);
  console.log('📊 Version:', packageJson.version);

  // Check if dist directory exists
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
    console.log('📁 Created dist directory');
  }

  // Check if src directory exists
  const srcPath = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcPath)) {
    console.error(
      '❌ src directory not found. Please ensure your source code is in the src/ directory.'
    );
    process.exit(1);
  }

  console.log('✅ Setup completed successfully!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Customize package.json with your information');
  console.log('2. Update README.md with your package details');
  console.log('3. Run npm run build to build your package');
  console.log('4. Run npm run test to run tests');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
