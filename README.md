# My Apps Hub (Next.js)

A minimalist, text-only landing page built with Next.js (App Router), TypeScript, and Tailwind CSS. Customize the headings, copy, and app entries to showcase your applications.

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
- Replace hero text, section copy, and footer name in `app/page.tsx`.
- Edit the app directory list in `app/data/apps.ts`.

This project uses Tailwind CSS for styling. Global styles are in `app/globals.css`, and Tailwind is configured via `tailwind.config.ts` and `postcss.config.js`.
