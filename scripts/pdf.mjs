// Renders /portfolio to public/portfolio.pdf with headless Chrome.
// Usage: pnpm pdf   (builds the site, serves dist/, prints, stops the server)
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, statSync, copyFileSync } from 'node:fs';

const PORT = 4329;
const URL = `http://localhost:${PORT}/portfolio/`;
const OUT = 'public/portfolio.pdf';

const chrome = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p));
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.');

execFileSync('pnpm', ['astro', 'build'], { stdio: 'inherit' });

const server = spawn('pnpm', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore', detached: true });
const stop = () => { try { process.kill(-server.pid); } catch {} };
process.on('exit', stop);

for (let i = 0; ; i++) {
  try { if ((await fetch(URL)).ok) break; } catch {}
  if (i > 100) throw new Error(`Preview server never answered at ${URL}`);
  await new Promise((r) => setTimeout(r, 150));
}

execFileSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=5000',
  `--print-to-pdf=${OUT}`,
  URL,
], { stdio: 'ignore' });

// Keep the built copy in step so the deployed /portfolio.pdf matches.
copyFileSync(OUT, 'dist/portfolio.pdf');
console.log(`Wrote ${OUT} (${(statSync(OUT).size / 1024).toFixed(0)} KB)`);
stop();
process.exit(0);
