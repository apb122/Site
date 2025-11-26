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

### Deploying to a shared web host (step-by-step)
Many shared hosts provide Node.js support but expect you to ship an already-built app. The safest path is to build locally, upload only the runtime artifacts, and start the server with a process manager (if provided by the host). Below is a generic, detailed checklist you can adapt to your provider:

1. **Prepare a clean production build locally**
   - Ensure dependencies are installed and up to date: `npm install`.
   - Run linting/tests to catch issues early: `npm run lint` (and any additional tests you add).
   - Produce a production build: `npm run build`.
   - Verify the build locally with `npm start` and sanity-check the pages at http://localhost:3000.

2. **Collect the deployable artifacts**
   - The production server needs the compiled output in `.next/` plus runtime files such as `package.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`, and `tsconfig.json` (for tooling). Tailwind and PostCSS configs are harmless to include and useful if the host runs a build step for you.
   - If your host supports installing dependencies on the server, copy the entire project **excluding** bulky folders (e.g., `node_modules`, `.git`, local `.next/cache`). Add a `.npmrc` if you rely on a private registry.
   - If your host does **not** allow installing dependencies, build locally and upload:
     - `.next/` (including `server/` and `static/` subdirectories)
     - `.next/static/chunks/` and `.next/static/media/`
     - `package.json` and `package-lock.json`
     - Minimal source files that `next start` expects (e.g., `next.config.ts`)
     - Skip development-only files to keep the upload small.

3. **Configure the server environment**
   - Set `NODE_ENV=production` to ensure optimized React and Next.js behavior.
   - If environment variables are required (e.g., API keys), add them via the host’s dashboard or `.env.production` file. Avoid committing secrets.
   - Confirm the host’s Node version meets Next.js requirements (Node 18+ recommended). If you cannot select the version, consider transpiling locally with `npm run build` and deploying the output.

4. **Install production dependencies on the host (if permitted)**
   - Run `npm ci --only=production` (preferred) or `npm install --production` from your app’s root directory on the server. This installs only runtime dependencies.
   - If `npm ci` is unavailable, use `npm install` but delete devDependencies afterward to save space.

5. **Start the Next.js server**
   - Use `npx next start -p 3000` (or another port allowed by your host). For stability, wrap it in a process manager:
     - **PM2 (common on shared hosts):** `npx pm2 start npm --name "portfolio" -- start -- -p 3000`
     - **Forever:** `npx forever start "npm start -- -p 3000"`
   - If the host expects a custom start command, point it to `npm start` or `npx next start`.

6. **Wire up the public URL**
   - Configure the host’s reverse proxy to forward HTTP traffic to your Node process (e.g., proxy port 80/443 to 3000). On cPanel/Apache-based hosts, use the provider’s Node.js app configuration UI to map the domain to the start script.
   - Ensure HTTPS is enabled (often via the host’s SSL/TLS section or Let’s Encrypt integration). Mixed-content issues are avoided because the site is monochrome and asset-light.

7. **Optimize for low memory footprints**
   - Use `npm ci --only=production` and avoid build steps on the server if resources are limited.
   - Keep the number of concurrent Node workers to 1–2 on constrained hosts; the site is lightweight and benefits more from predictable memory than extra workers.
   - Consider enabling compression at the proxy level (gzip/brotli) if the host allows it.

8. **Optional static export fallback**
   - If your host cannot run a Node process, you can attempt a static export (limited because some App Router features need a server). Add `output: 'export'` to `next.config.ts`, run `npm run build`, then `npx next export`. Upload the generated `out/` directory to your host as a static site. Remove or adapt any server-only features if they do not export cleanly.

9. **Post-deploy checks**
   - Verify the site loads without console errors and that the theme toggle, command palette, and keyboard navigation work.
   - Test on mobile, tablet, and desktop breakpoints. Ensure scroll progress and reduced-motion settings feel subtle.
   - Re-run `npm run lint` locally before future deployments to keep builds stable.
