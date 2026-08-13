# Visual verification notes

## Verified routes

The preview was checked at `/`, `/works`, `/works/light-drawn-family-lounge`, `/services`, and `/contact` on a 1280×720 viewport with full-page screenshots. All five routes rendered successfully, including the project detail route that was a 404 in the reference site.

The mobile layout was checked at 390×844 for `/`, `/works`, and `/contact`. The header remains horizontally usable, the works title no longer overflows, contact information stays readable, and the mobile comparison control is visible below the hero image.

## Interaction notes

The homepage shows the original warm interior image pair with a circular, cursor-following After reveal on pointer devices. On coarse-pointer devices, the component initializes to a touch-safe mode and exposes a Before / After range control. The component also respects `prefers-reduced-motion` via the global stylesheet.

## Known non-blocking note

The build reports a Vite chunk-size warning because the static template bundles the full component library; TypeScript and production build both complete successfully. No new runtime error was observed in the preview network or console logs after the final HMR update.

## Portfolio integration verification

The desktop preview now presents **黃昌業 / Huang Chang-Yeh** in the header and uses the proposed personal positioning “Spaces, shaped by light.” The homepage hero pairs a residential visualization with the tea-house graduation project and keeps the reference site's cursor reveal rhythm.

The full-page Works view renders seven project cards from the PDF content: tea house, qipao retail, Tudigong temple concept, Yongji 18F, Yongji 13F, Rhino form study, and Yushan Community 3D. The tea-house detail route renders its selected images and optimized design concept rather than a 404.

The About page includes the user-provided birth and education timeline. The Contact page uses the user-provided phone `0918-251-628` and email `18141570j@gmail.com` with working `tel:` and `mailto:` links.
