# Portfolio

A Vite + React portfolio with three visual sections:

- `3D`
- `Gamedev`
- `Coding`

The site uses a lightweight client-side path switcher so each section has its own gallery content and full-width horizontal background bands.

## Development

Run the local dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Swords hosting

The container serves `https://portfolio.bcgen.ie/konradkunkel/` with direct-page
fallbacks and cached assets. Build it with:

```bash
docker build --platform linux/amd64 -t registry.srd.bcgen.ie/bcgen-ie/portfolio-konradkunkel:TAG .
```

The Nomad job and DNS declaration live in the `private-cloud-federation`
repository under `deploy/portfolio-konradkunkel/` and
`deploy/traefik/cloudflare-public-dns.json`. Deployment credentials come from
OpenBao at `https://bao.srd.bcgen.ie`. The workload runs on Swords nodes.

## Project Structure

```text
src/
  assets/       Static images and logos used by the portfolio
  components/   Reusable UI pieces like the header and gallery bands
  data/         Portfolio page configuration and content
  App.jsx       App shell and page switching logic
  App.css       Main component styling
  index.css     Global styles and theme tokens
  main.jsx      React entry point
```

## Notes

- Valid paths are `/3d`, `/gamedev`, and `/coding`.
- For deployment, configure SPA fallback rewrites if you want direct refreshes on those paths to work.
