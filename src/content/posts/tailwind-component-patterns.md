---
title: "Tailwind CSS Component Patterns I Actually Use"
description: "Practical Tailwind patterns for cards, navbars, badges, and layouts — no extra libraries needed."
date: 2025-02-20
category: "frontend"
tags: ["tailwind", "css", "components", "ui"]
---

## The card

The most reusable pattern. Dark theme card with hover:

```html
<div class="rounded-lg border border-white/10 bg-white/5 p-5
            transition-all hover:bg-white/10 hover:border-white/20">
  <h3 class="font-semibold text-white">Card Title</h3>
  <p class="mt-1 text-sm text-white/60">Description text here.</p>
</div>
```

## Badge / tag

```html
<span class="rounded-full bg-orange-500/20 px-2.5 py-0.5
             text-xs font-medium text-orange-400">
  Category
</span>
```

Change `orange` to any color for different categories. Use the `bg-{color}/20` + `text-{color}` pattern for consistency.

## Sticky sidebar layout

The HLTV-style main + sidebar:

```html
<div class="flex gap-6">
  <!-- Main -->
  <main class="flex-1 min-w-0">
    <!-- Content -->
  </main>

  <!-- Sidebar -->
  <aside class="w-80 shrink-0">
    <div class="sticky top-20 space-y-4">
      <!-- Sidebar cards -->
    </div>
  </aside>
</div>
```

Key: `min-w-0` on main prevents flex overflow. `shrink-0` on sidebar keeps it fixed width.

## Glass nav

```html
<nav class="sticky top-0 z-50 border-b border-white/10
            bg-black/80 backdrop-blur-md">
  <!-- Nav content -->
</nav>
```

## Responsive grid

```html
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <!-- Cards -->
</div>
```

## Truncated text

```html
<!-- Single line -->
<p class="truncate">Long text...</p>

<!-- Multi-line clamp -->
<p class="line-clamp-2">Long text that wraps to max 2 lines...</p>
```

## Dark theme color system

Instead of hardcoding colors everywhere, use CSS custom properties:

```css
:root {
  --surface: #1a2332;
  --surface-hover: #243447;
  --border: #2d3f50;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --accent: #f97316;
}
```

Then in Tailwind config, map these to utility classes. Keeps everything consistent and easy to tweak.
