# Netlify deployment

This project is a Vite-powered React single-page application. The repository includes `netlify.toml`, so Netlify can detect the build configuration automatically.

| Setting | Value |
|---|---|
| Build command | `pnpm run build` |
| Publish directory | `dist/public` |
| Node version | `22.13.0` |
| SPA fallback | `/*` → `/index.html` with status `200` |

To deploy, choose **Add new site → Import an existing project → GitHub**, select the `huang-chang-yeh` repository, and keep the detected settings. The project uses client-side routes such as `/about`, `/works`, and `/contact`; the included redirect keeps those routes working after a direct refresh.
