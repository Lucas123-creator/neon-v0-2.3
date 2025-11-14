## NeonHub UI/UX Playbook

### Primitives
- GlassCard: `components/neon/GlassCard.tsx`
- NeonHeading: `components/neon/NeonHeading.tsx`
- StatusPill: `components/neon/StatusPill.tsx`
- KPIStat: `components/neon/KPIStat.tsx`

Utilities (globals.css)
- `.glass-surface`, `.neon-border`, `.focus-ring`

### Motion
- FadeIn / SlideUp: `components/motion/*` (respects reduced motion)

### Lazy-load Pattern
```ts
const Charts = dynamic(() => import("@/components/analytics/AnalyticsCharts"), { ssr: false, loading: () => <Skeleton className="h-64 w-full" /> })
```

### Routes Added
- Workspace: `/projects`, `/teams`, `/tasks`, `/documents`, `/messages`, `/onboarding`
- Brand & Assets: `/content`, `/content/editor`
- Insights: `/feedback`

### Command Palette
- Indexed routes and quick actions; press Cmd/Ctrl+K.

### Sidebar
- Grouped into pillars, with pin/unpin.

### Notes
- Charts are lazy-loaded to reduce initial JS.
- Keep new UIs token-driven; avoid hard-coded colors.


