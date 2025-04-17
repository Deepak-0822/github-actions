#!/bin/bash
set -e

# Run eslint
echo "Running ESLint..."
npx eslint . -f github
