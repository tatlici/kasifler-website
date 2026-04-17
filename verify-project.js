#!/usr/bin/env node

/**
 * Kaşifler Diyarî - Project Verification Script
 * Run this to verify all files and dependencies are correct
 */

const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
let errors = [];
let warnings = [];

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║     Kaşifler Diyarî - Project Verification             ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// Check critical files
const criticalFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'next.config.js',
  'app/page.tsx',
  'app/layout.tsx',
  'components/Hero.tsx',
  'components/Navigation.tsx',
  'content/tr.json',
  'content/en.json',
  'public/assets/hero/video.mp4',
];

console.log('Checking critical files...');
criticalFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} - MISSING!`);
    errors.push(`Missing file: ${file}`);
  }
});

// Check components exist
console.log('\nChecking components...');
const components = [
  'About.tsx',
  'ContactForm.tsx',
  'Features.tsx',
  'Footer.tsx',
  'Gallery.tsx',
  'Hero.tsx',
  'LanguageToggle.tsx',
  'Navigation.tsx',
];

components.forEach(comp => {
  const filePath = path.join(projectRoot, 'components', comp);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ ${comp}`);
  } else {
    console.log(`  ✗ ${comp} - MISSING!`);
    errors.push(`Missing component: ${comp}`);
  }
});

// Check JSON validity
console.log('\nValidating JSON files...');
['content/tr.json', 'content/en.json'].forEach(file => {
  try {
    const content = fs.readFileSync(path.join(projectRoot, file), 'utf-8');
    JSON.parse(content);
    console.log(`  ✓ ${file} - Valid JSON`);
  } catch (e) {
    console.log(`  ✗ ${file} - Invalid JSON!`);
    errors.push(`Invalid JSON: ${file}`);
  }
});

// Check package.json has required dependencies
console.log('\nValidating dependencies...');
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf-8'));
  const requiredDeps = ['next', 'react', 'react-dom', 'tailwindcss'];
  requiredDeps.forEach(dep => {
    if (pkg.dependencies[dep] || pkg.devDependencies[dep]) {
      console.log(`  ✓ ${dep}`);
    } else {
      console.log(`  ✗ ${dep} - MISSING!`);
      errors.push(`Missing dependency: ${dep}`);
    }
  });
} catch (e) {
  errors.push('Cannot parse package.json');
}

// Summary
console.log('\n' + '═'.repeat(56));
if (errors.length === 0) {
  console.log('✅ All checks passed! Project is ready.');
  console.log('\nNext steps:');
  console.log('  1. npm install');
  console.log('  2. npm run dev');
  console.log('  3. Open http://localhost:3000');
} else {
  console.log('❌ ' + errors.length + ' error(s) found:');
  errors.forEach(err => console.log('   - ' + err));
}

if (warnings.length > 0) {
  console.log('\n⚠️  ' + warnings.length + ' warning(s):');
  warnings.forEach(warn => console.log('   - ' + warn));
}
console.log('═'.repeat(56) + '\n');

process.exit(errors.length > 0 ? 1 : 0);
