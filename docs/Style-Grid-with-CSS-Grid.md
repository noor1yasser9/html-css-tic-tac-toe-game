# Style Grid with CSS Grid

The component is clean and correct. Here's a full summary of what was implemented:

---

## ✅ `src/components/ui/grid.tsx` — New File

### What was built

Two composable, `forwardRef`-based components following the project's exact Tailwind + `cn()` + Radix-style pattern:

---

### `<Grid cols={3}>` — Container

| CSS Property | Value |
|---|---|
| `display` | `grid` |
| `grid-template-columns` | `repeat(cols, 1fr)` ← dynamic via `style` prop |
| inner border lines | `border-r` + `border-b` on **every** child via `[&>*]` selectors |

**Inner-only borders** (no outer edges) are achieved purely through CSS child selectors managed on the container — zero border logic leaks into cells:

```
[&>*]:border-r [&>*]:border-b          → all cells get right + bottom border
[&>*:nth-child(3n)]:border-r-0         → strip right from last column
[&>*:nth-last-child(-n+3)]:border-b-0  → strip bottom from last row
```

This technique works correctly even when the last row is **partially filled**.

---

### `<GridCell width={100} height={100}>` — Cell

| CSS Property | Value |
|---|---|
| `width` / `height` | `100px × 100px` (default, overridable) |
| `background` | `bg-bg-secondary` (project design token) |
| `hover` | `bg-bg-tertiary` + `text-text-primary` |
| border | **none** — managed entirely by parent `<Grid>` |

---

### Usage example

```tsx
import { Grid, GridCell } from '@/components/ui/grid';

// 3-column grid, each cell 100 × 100 px, inner borders only
<Grid cols={3}>
  {Array.from({ length: 9 }, (_, i) => (
    <GridCell key={i}>{i + 1}</GridCell>
  ))}
</Grid>
```