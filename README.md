# Minimal Stack Portfolio

A calm, text-led portfolio built with the Next.js App Router. It favors whitespace, clear typography, and quick navigation between concise sections.

## What's included
- Light/dark themes that respect system preference and persist locally.
- Command palette (Ctrl/Cmd + K) for jumping to sections or project links.
- Accessible structure with semantic landmarks and keyboard-friendly controls.
- Responsive, single-column layout tuned for small and large screens.
- JSON-driven projects list in `app/data/apps.json` so content updates stay code-light.

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000.
3. Lint the project:
   ```bash
   npm run lint
   ```
4. Create a production build:
   ```bash
   npm run build
   ```
5. Start the built app locally:
   ```bash
   npm start
   ```

## Customizing content
- Update site metadata in `app/layout.tsx`.
- Edit hero/about/contact copy inside components under `app/components/`.
- Adjust the project list in `app/data/apps.json` (types enforced via `app/data/apps.ts`).
- Tweak styling tokens in `tailwind.config.ts` and `app/globals.css`.

## Deployment
The project is optimized for Vercel's default Next.js workflow:
1. Build with `npm run build`.
2. Deploy the repository or build output to Vercel (zero-config).
3. For other Node hosts, run `npm ci --only=production` followed by `npm start`.
