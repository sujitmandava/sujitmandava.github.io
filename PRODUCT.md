# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, chosen by the user over plain static HTML for the from-scratch redesign. Deploys to GitHub Pages through a GitHub Action (the current site is static HTML/CSS served from this repo with `.nojekyll`). Video loops and images ship from the repo, so file size is a constraint.

## Users

Primary: recruiters, hiring managers and engineers on applied AI/ML teams, deciding whether to interview Sujit for a role starting December 2026. They skim fast and look for proof: shipped work, measured results, and evidence of judgment. The products are there as evidence for that hiring decision, not to win users.

## Product Purpose

Sujit Mandava's personal site. It should make a hiring manager want to talk to him. Success means a visitor gets in touch, opens the résumé, or follows a product or repo link because the work convinced them.

## Positioning

Two strengths get equal weight:

1. **Applied ML with measured results.** He questions the problem before building, attaches an eval to every change, and makes systems better and cheaper at once. Proof: the Relativity internship, where evidence recall went from 0.30 to 0.68 at 4% of the cost of brute-force LLM review.
2. **Ships whole products alone.** He takes products from problem to shipped app: schema, model, UI, and the monitoring.

Few candidates can show both research-grade measurement and products they built end to end. The site must show both rather than lean on either one.

## Operating Context

- Visitors usually arrive from a résumé, LinkedIn, a job application or a referral, often on a phone, and spend a minute or two.
- The résumé is `resume.pdf` in the repo root.
- Status line: open to AI/ML roles from December 2026; M.S. AI at Northwestern, Evanston, IL.

## Capabilities and Constraints

- Sections today: hero (with the about story and portrait folded in), education, experience, featured products, more projects, contact. A redesign may restructure them but must keep their facts.
- **Featured products** (in order): Wren, FPL Agent AI (now a personal FPL planner), SafeWatch.
- **Cellar is demoted** to the project grid as paused, because the app is currently broken. Don't show its screenshots or link to it as live.
- **Product videos:** each featured product gets a short loop made with the brag skill, shown muted in the card, with a poster frame, lazy loading, and a still image under `prefers-reduced-motion`. A full-length version with sound can be linked. Only Wren's exists so far; the others will be generated.
- Light theme is the default, with a saved dark-mode choice. Keep both.
- Private repos (CME Trading Challenge agent, AI Egress Proxy) show "Private repo", not a link.

## Brand Commitments

- Name: Sujit Mandava. Role line: "AI engineer · Product builder".
- Voice: plain, direct, first person, specific numbers over adjectives. Current headline: "I question the problem before I engineer the answer."
- Each product keeps its own name and tagline: Wren's is "Hear how they're really doing."

## Evidence on Hand

- **Relativity (Applied Scientist Intern, Jun–Aug 2026):** recall 0.30 → 0.68 (top 1,000); +62% supporting citations, 13 of them confirmed by expert review as missing from the original filing; $17 per claim vs. $400 for exhaustive LLM review (96% lower) while keeping 80% of its recall; 47K-document OCR'd corpus.
- **hGrid / Mahathi Software (Software Engineer, Dec 2024 – Aug 2025):** owned full-stack architecture of CareTab, SunPay and Docuracy; built deployment and observability pipelines; moved jobs onto Celery.
- **Education:** M.S. AI, Northwestern (Sep 2025 – Dec 2026); B.Tech CSE, IIT Palakkad (Oct 2020 – Jul 2024).
- **Basketball:** captained the IIT Palakkad club, grew it from 8 to 65+ members, founded the institute's first women's team.
- **Wren:** brag video at `~/projects/cadence/brag-output-2026-11-20-150944/brag.mp4` (1920×1080, 23.5s, 5.6 MB, with music by Sascha Ende, CC BY 4.0, which must be credited if the audio is used) plus `brag.jpg` and `share-copy.txt`.
- **FPL Agent AI:** brag video at `~/Desktop/Projects/fpl-agent-ai/brag-output/brag.mp4` (23.7s, music by Sascha Ende; licence not stated in the brag output). Facts from `~/Desktop/Projects/fpl-agent-ai/README.md`. Planner from a team ID with no login, xPts model, MILP optimizer, chip plan, mini-league view, Next.js web app (Plan screen built; League, Squad and Players not yet). Public repo: github.com/sujitmandava/fpl-agent-ai. No public deployment URL yet.
- **SafeWatch:** MVP, no public demo yet.
- Images: the owner's portrait (`public/images/portrait.webp`, shown small in the hero byline beside the status line) and school and employer logos under `public/images/`; product films and their still frames under `public/video/`.
- **Absent, do not invent:** testimonials, user counts for any product, live product URLs, press.

## Product Principles

1. Proof before claims: every assertion sits next to a number, a shipped artifact or a link.
2. Show both strengths, measured ML and whole products, with neither treated as a footnote.
3. Respect a skimming hiring manager: the strongest evidence is reachable in seconds, especially on a phone.
4. Show the products working (video, real UI) rather than describing them.
5. Only state what's true today: status labels reflect reality ("paused", "in development").

## Accessibility & Inclusion

Respect `prefers-reduced-motion` everywhere, video included. Videos are muted by default and never the only carrier of information.
