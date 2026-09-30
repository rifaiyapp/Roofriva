# ROOFRIVA reconstruction QA — 2026-09-30

final result: blocked

## Target and evidence

- Source: supplied `figma01.jfif`, 286 × 2048 pixels. Session path: `/workspace/scratch/7c20d2bc69c3/upload/figma01.jfif`.
- Inferred primary viewport: 1440 CSS pixels wide, density 1. Normalize render to 286 pixels wide for comparison. The source is a downscaled desktop design, not a 286px mobile design.
- Additional required widths: 1280, 1024, 768, 390, 360.
- Full source and focused hero, service, material, About and lower-page crops inspected.
- Current production opened in cloud browser: starter form matching upstream main `88d2790`.
- No implementation screenshot exists. The supervised preview starts successfully, but cloud browser access returns `net::ERR_BLOCKED_BY_CLIENT`. Reading the resulting error tab is rejected by browser URL security policy. No raw browser or alternate-host workaround used.

## Implemented

- Native Astro homepage and CSS breakpoints following source section proportions.
- Self-hosted Poppins: regular, medium, semibold, bold.
- Individually reconstructed hero, crew, About, services, materials, projects and illustrative map, locally served as WebP.
- Menu toggle/Escape/anchor close, native single-open FAQ, gallery selection, telephone/email links and existing connected lead form.
- Matching thank-you and 404 routes.
- Existing lead-delivery code and infrastructure preserved.

## Fidelity surfaces

1. Typography: Poppins selected visually; exact font and rendered wrapping require comparison.
2. Layout: source-normalized desktop section geometry, intended height approximately 10,285px; actual render and overflow remain unverified.
3. Colors: source red/charcoal/white/soft-grey hierarchy retained; browser comparison pending.
4. Assets: reconstructions, not original photographs. ROOFRIVA brand retained. SVG icons/roof diagrams follow the master protocol's allowance. Review portraits differ; map is explicitly illustrative.
5. Copy: readable headings retained with ROOFRIVA identity/contact details; unreadable text uses conservative replacement copy. Source statistics/reviews/guarantee/platforms labeled demo. These are meaningful differences, not zero-pixel parity.

## Findings

- Verification blocker: local browser access denied. Full-page/focused comparison, responsive QA, interaction QA and console inspection are pending.
- Unresolved P1/P2 fidelity risks: original photography, exact mark geometry, review portraits, map and fine source text unavailable. Reconstructed replacements require review.
- Actual P0/P1/P2 counts have NOT been established. Build success does not clear visual acceptance.

## Comparison history

1. Analysis: inspected source, mapped section boundaries and recovered older branch assets.
2. Implementation: reproduced composition and replaced inappropriate older photography with source-guided reconstructions.
3. Capture attempt: server healthy, browser access denied. No visual comparison pass completed; no visual PASS claimed.

## QA status

| Check | Result |
| --- | --- |
| Static source/asset/link checks | PASS: no missing local assets, no broken anchors, one H1, canonical form fields and accessible status, no external scripts |
| Production check/build | PASS; existing unused mountedAssets hint in untouched infrastructure |
| 1440 / 1280 / 1024 / 768 / 390 / 360 browser QA | BLOCKED |
| Full-page and focused screenshot comparison | BLOCKED |
| Menu, FAQ, gallery, keyboard and focus | Implemented; browser verification pending |
| Form validation, success/error, redirect | Existing helper retained; browser verification pending |
| Live lead delivery | Not tested; no real leads submitted |
| Console errors | Not checked in implementation browser |
| Motion | Deferred until static parity; no new animation libraries; reduced-motion guard included |
| Production deployment of this rebuild | Not approved by required visual gate |
| Post-deployment screenshot/comparison | Not performed |

The existing prebuild synchronization changes generated local routing configuration. Those generated diffs are excluded from the website source commit.

## Required continuation

1. Restore supported browser preview access.
2. Capture stable fonts/images at 1440px, combine with source, compare every section, fix P0/P1/P2 issues and repeat.
3. Test every required viewport, keyboard and form states using intercepted/mock delivery. Add restrained motion only after parity.
4. Validate, review, commit, push main, wait for Cloudflare, verify actual production and capture/compare again.
