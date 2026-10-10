# PMCM Portfolio

Personal portfolio built with React, TypeScript, Vite, and SCSS Modules.
The contact form uses EmailJS and React Toastify.

## Development

Run commands inside WSL from /root/projects/portfolio using Linux Node.js:

```bash
nvm install
nvm use
npm ci
npm run dev
```

Open the local URL printed by Vite. npm start is also available.

## Validation and deployment

```bash
npm run typecheck
npm test
npm run build
npm run preview
```

The production build includes TypeScript validation and outputs to build/.
Deploy that directory to a static host. Files in public/, including the
resume PDF, are copied into the build. npm run preview serves the production
build locally; it is not a production server.

Tests use Vitest, jsdom, and React Testing Library. Use npm run test:watch
for interactive testing. Client environment variables use the VITE_ prefix
and are accessed through import.meta.env; never put secrets in them.
