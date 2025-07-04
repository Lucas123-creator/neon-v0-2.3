#!/bin/bash

# Fix tRPC Provider Setup Script

echo "🔧 Setting up tRPC provider..."

DASHBOARD_PATH=${1:-"apps/dashboard"}

# Check if layout.tsx exists
LAYOUT_FILE="$DASHBOARD_PATH/src/app/layout.tsx"
APP_FILE="$DASHBOARD_PATH/src/pages/_app.tsx"

if [ -f "$LAYOUT_FILE" ]; then
    echo "Found App Router layout.tsx"
    
    # Check if tRPC provider is already set up
    if grep -q "TRPCProvider\|trpc" "$LAYOUT_FILE"; then
        echo "✅ tRPC provider already configured"
    else
        echo "⚠️  tRPC provider not found - manual setup required"
        echo "Add the following to your layout.tsx:"
        echo ""
        echo "import { TRPCProvider } from '@/lib/trpc/provider'"
        echo ""
        echo "// Wrap children with:"
        echo "<TRPCProvider>{children}</TRPCProvider>"
    fi
    
elif [ -f "$APP_FILE" ]; then
    echo "Found Pages Router _app.tsx"
    
    if grep -q "TRPCProvider\|trpc" "$APP_FILE"; then
        echo "✅ tRPC provider already configured"
    else
        echo "⚠️  tRPC provider not found - manual setup required"
    fi
else
    echo "❌ No layout file found"
fi

echo "✅ tRPC provider check completed"
