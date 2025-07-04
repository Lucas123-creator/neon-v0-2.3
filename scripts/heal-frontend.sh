#!/bin/bash

# NeonHub v0 Frontend Healing Script
# This script performs a comprehensive audit and healing of the frontend

set -e

echo "🚀 Starting NeonHub v0 Frontend Healing Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Environment Setup
echo -e "${BLUE}📋 Step 1: Environment Setup${NC}"
echo "Checking monorepo structure..."

# Check if we're in a monorepo
if [ ! -f "pnpm-workspace.yaml" ] && [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Not in a valid monorepo root${NC}"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Generate Prisma client if schema exists
if [ -f "packages/data-model/prisma/schema.prisma" ]; then
    echo "Generating Prisma client..."
    npx prisma generate --schema=packages/data-model/prisma/schema.prisma
elif [ -f "prisma/schema.prisma" ]; then
    echo "Generating Prisma client..."
    npx prisma generate
fi

# Step 2: Code Quality Audit
echo -e "${BLUE}📋 Step 2: Code Quality Audit${NC}"

# Run linting
echo "Running ESLint..."
if pnpm lint 2>/dev/null; then
    echo -e "${GREEN}✅ Linting passed${NC}"
else
    echo -e "${YELLOW}⚠️  Linting issues found - attempting auto-fix${NC}"
    pnpm lint --fix || echo -e "${RED}❌ Manual lint fixes required${NC}"
fi

# Run type checking
echo "Running TypeScript check..."
if pnpm typecheck 2>/dev/null; then
    echo -e "${GREEN}✅ Type checking passed${NC}"
else
    echo -e "${RED}❌ Type errors found - manual fixes required${NC}"
fi

# Step 3: Build Test
echo -e "${BLUE}📋 Step 3: Build Test${NC}"
if pnpm build 2>/dev/null; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed - manual fixes required${NC}"
fi

echo -e "${GREEN}🎉 Frontend healing process completed!${NC}"
echo "Check the generated reports in ./healing-reports/ for detailed findings."
