# Turnkey — Pixel-Perfect Clone

A pixel-perfect HTML/CSS/JS clone of [Turnkey](https://uppish-master-convert-flow.base44.app) — a web design service for home remodelers.

## 🎨 What's Included

- **`index.html`** — Full semantic HTML markup with all sections
- **`style.css`** — Complete CSS with design tokens, animations & responsive layout
- **`main.js`** — Vanilla JS for scroll animations, nav behavior, FAQ accordion & form handling

## ✨ Features Cloned

| Section | Details |
|---------|---------|
| **Navigation** | Sticky nav with blur-on-scroll, mobile hamburger menu |
| **Hero** | Aurora gradient background, animated headline with text-gradient, stats bar, inline booking form |
| **Features** | 2×3 card grid with hover effects |
| **Old Way vs New Way** | Side-by-side comparison cards |
| **How It Works** | 3-step process with connector line |
| **Reviews** | Trustpilot-style review cards with ratings |
| **CTA Banner** | Full-width call-to-action section |
| **FAQ** | Accordion with smooth expand/collapse |
| **Contact** | Split-layout booking form |
| **Footer** | Multi-column with social links |

## 🎯 Animations

- **Aurora** radial gradient background (hero section)
- **Fade-in-up** staggered entrance animations for hero content
- **Scroll reveal** via IntersectionObserver for all sections
- **FAQ accordion** with cubic-bezier easing
- **Nav blur** transition on scroll
- **Button hover** micro-interactions
- **Form submit** loading state with spinner

## 🛠 Design System

- **Colors**: Dark theme — HSL CSS variables (purple primary `hsl(271, 91%, 65%)`)
- **Fonts**: Sora (headings), Inter (body), JetBrains Mono (labels)
- **Radius**: `--radius: 1rem`

## 🚀 Usage

Just open `index.html` in a browser — no build step required. Everything is vanilla HTML/CSS/JS.

```bash
# Or serve locally
npx serve .
# or
python -m http.server 8080
```

## 📋 Original Source

Cloned from: https://uppish-master-convert-flow.base44.app
