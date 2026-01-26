#!/bin/bash

echo "🚀 Starting deployment preparation..."

# Clean up
echo "🧹 Cleaning up..."
rm -rf .next
rm -rf node_modules
rm -rf .vercel

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building application..."
npm run build

echo "✅ Build completed successfully!"
echo "📤 Ready for Vercel deployment"