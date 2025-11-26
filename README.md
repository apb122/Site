# Minimal Stack Portfolio (Next.js)

A deliberately minimal, text-led gallery built with the Next.js App Router, TypeScript, and Tailwind CSS. The layout focuses on whitespace, typography, and restrained motion to foreground your applications.

## Features
- **Light/Dark themes** persisted with `localStorage` and respects system preference on first load.
- **Command palette** (`Ctrl/Cmd + K`) to jump to sections or external app links.
- **Accessible structure** with semantic landmarks, keyboard-friendly toggles, and WCAG-aware contrast.
- **Micro-interactions** kept subtle for hover and focus states, with reduced-motion fallbacks.
- **Responsive layout** tuned for mobile-first with max-width constraints for large screens.
- **JSON-driven apps** list in `app/data/apps.json` for quick updates without touching components.

## Getting Started
1. Install dependencies (registry access required):
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000.
3. Lint the project:
   ```bash
   npm run lint
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Start the production server:
   ```bash
   npm start
   ```

## Customization
- Update site metadata in `app/layout.tsx`.
- Replace intro, about, contact copy, and footer line inside the components under `app/components/`.
- Edit the app list in `app/data/apps.json` (types enforced via `app/data/apps.ts`).
- Adjust Tailwind tokens or colors in `tailwind.config.ts` and `app/globals.css`.

## Deployment
- **Vercel:** zero-config for Next.js; set `NODE_ENV=production` and run `npm run build`. Caches static assets aggressively.
- **Static export (optional):** pair with Next.js output export if you avoid server-side APIs.
- **Edge-ready:** design keeps dependencies lean for optimal cold starts and Core Web Vitals.
