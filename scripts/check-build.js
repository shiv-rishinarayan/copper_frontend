#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking build configuration...\n');

// Check for required files
const requiredFiles = [
  'package.json',
  'next.config.mjs',
  'pages/_app.js',
  'tailwind.config.mjs',
  'postcss.config.mjs'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, '..', file))) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Check environment variables
console.log('\n🌍 Environment Variables:');
console.log(`NEXT_PUBLIC_API_BASEURL: ${process.env.NEXT_PUBLIC_API_BASEURL || 'NOT SET'}`);

// Check package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
console.log(`\n📦 Next.js Version: ${packageJson.dependencies.next}`);
console.log(`📦 React Version: ${packageJson.dependencies.react}`);

console.log('\n✨ Build check complete!');