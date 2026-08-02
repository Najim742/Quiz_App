<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Quiz Master — Project Documentation (App Dev Lab)</title>
<meta name="author" content="Najim" />
<style>
  /* ---------- A4 print base ---------- */
  :root {
    --ink: #0b0f1a;
    --muted: #4a506b;
    --line: #c9cde0;
    --accent: #2563eb;
    --accent-dark: #1d4ed8;
    --surface: #f4f6fc;
    --code-bg: #eef1ff;
    --table-head: #2563eb;
  }
  @page {
    size: A4;
    margin: 16mm 14mm 18mm 14mm;
  }
  html, body {
    margin: 0; padding: 0;
    background: #e9ecf7;
    color: var(--ink);
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 11.5pt;
    line-height: 1.5;
  }
  .sheet {
    width: 210mm;
    min-height: 297mm;
    padding: 18mm 16mm 18mm 16mm;
    margin: 14mm auto;
    background: #fff;
    box-shadow: 0 8px 36px rgba(20, 30, 80, 0.14);
    page-break-after: always;
    box-sizing: border-box;
  }
  .sheet:last-child { page-break-after: auto; }

  /* ---------- Typography ---------- */
  h1, h2, h3, h4 { color: var(--accent-dark); font-weight: 700; letter-spacing: -0.01em; }
  h1 { font-size: 26pt; margin: 0 0 4mm; text-align: center; line-height: 1.15;}
  h2 {
    font-size: 16pt;
    margin: 0 0 4mm;
    padding: 1.6mm 4mm;
    background: linear-gradient(90deg, rgba(37,99,235,0.12), rgba(37,99,235,0));
    border-left: 3px solid var(--accent);
    border-radius: 2mm;
  }
  h3 { font-size: 12.5pt; margin: 4mm 0 2mm; }
  h4 { font-size: 11.5pt; margin: 2.5mm 0 1.5mm; }
  p { margin: 0 0 2.5mm; }
  ul, ol { margin: 0 0 3mm; padding-left: 6mm; }
  li { margin: 0.8mm 0; }
  strong { color: #0c1538; }
  code {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
    font-size: 10.2pt;
    background: var(--code-bg);
    color: #1e3a8a;
    padding: 0.4mm 1.2mm;
    border-radius: 1.2mm;
    border: 1px solid #e0e4fb;
  }
  pre {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
    font-size: 9.5pt;
    background: var(--code-bg);
    border: 1px solid #e0e4fb;
    border-radius: 2.5mm;
    padding: 3mm 4mm;
    line-height: 1.45;
    white-space: pre-wrap;
    word-break: break-word;
    margin: 2mm 0 3.5mm;
  }
  pre code { background: transparent; border: 0; padding: 0; color: inherit; }

  /* ---------- Tables ---------- */
  table { width: 100%; border-collapse: collapse; margin: 2.5mm 0 4mm; font-size: 10.8pt; }
  th, td { border: 1px solid var(--line); padding: 1.6mm 2.4mm; vertical-align: top; text-align: left; }
  th {
    background: var(--table-head);
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.02em;
    font-size: 10.2pt;
  }
  tr:nth-child(even) td { background: #fafbff; }
  .tbl-small td, .tbl-small th { font-size: 9.8pt; padding: 1.2mm 2mm; }

  /* ---------- Title page ---------- */
  .titlepage {
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    text-align: center; gap: 6mm;
  }
  .titlepage .brand {
    width: 36mm; height: 36mm; margin: 0 auto 4mm;
    border-radius: 8mm;
    background: linear-gradient(135deg, #2563eb, #4f46e5);
    box-shadow: 0 8px 22px rgba(37,99,235,0.35);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 10pt; font-weight: 700;
    position: relative;
  }
  .titlepage .brand::before {
    content: "";
    width: 22mm; height: 22mm;
    background:
      radial-gradient(circle at 50% 50%, transparent 40%, #ffffffaa 41%, transparent 43%),
      linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0));
    position: absolute;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5'/><path d='m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5'/></svg>") center/contain no-repeat;
            mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5'/><path d='m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5'/></svg>") center/contain no-repeat;
  }
  .titlepage h1 {
    font-size: 32pt;
    background: linear-gradient(135deg, #1e3a8a, #4f46e5);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .titlepage .subtitle { font-size: 13pt; color: var(--muted); max-width: 140mm; margin: -2mm auto 4mm; }
  .meta-grid {
    display: grid; grid-template-columns: 40mm 1fr;
    gap: 1.8mm 4mm;
    margin-top: 6mm;
    width: 150mm;
    text-align: left;
    border-top: 1px solid var(--line);
    padding-top: 5mm;
  }
  .meta-grid .k { color: var(--muted); font-size: 10.5pt; font-weight: 600; }
  .meta-grid .v { font-weight: 600; color: var(--ink); font-size: 11pt; }
  .course-chip {
    display: inline-block;
    margin-top: 8mm;
    padding: 1.2mm 5mm;
    border-radius: 99mm;
    background: #eef2ff;
    color: var(--accent-dark);
    font-weight: 700; font-size: 10.5pt;
    letter-spacing: 0.06em; text-transform: uppercase;
    border: 1px solid #d8defc;
  }

  /* ---------- Page header/footer for content pages ---------- */
  .pagehead {
    display: flex; justify-content: space-between; align-items: center;
    padding-bottom: 2.5mm; margin-bottom: 4mm;
    border-bottom: 1px solid var(--line);
    font-size: 9.8pt; color: var(--muted);
  }
  .pagehead .brandmark { color: var(--accent-dark); font-weight: 700; letter-spacing: 0.04em; }
  .pagefoot {
    margin-top: auto;
    padding-top: 2.5mm; margin-top: 5mm;
    border-top: 1px solid var(--line);
    font-size: 9pt; color: var(--muted);
    display: flex; justify-content: space-between;
  }
  .content { display: flex; flex-direction: column; min-height: 261mm; }

  /* ---------- Badges / chips ---------- */
  .chips { display: flex; flex-wrap: wrap; gap: 1.5mm; margin: 1mm 0 3mm; }
  .chip {
    display: inline-block; padding: 0.8mm 2.4mm; border-radius: 99mm;
    background: #eef2ff; color: var(--accent-dark);
    font-size: 9.5pt; font-weight: 600; border: 1px solid #dde3fe;
  }
  .chip.ok { background: #ecfdf5; color: #047857; border-color: #bfead3; }
  .chip.warn { background: #fff7ed; color: #b45309; border-color: #f6d6b0; }
  .chip.purple { background: #f5f3ff; color: #6d28d9; border-color: #ddd6fe; }

  /* ---------- 2-col grid ---------- */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
  .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
  .feat-card {
    background: var(--surface);
    border: 1px solid #e2e6f7;
    border-radius: 3mm;
    padding: 3mm 3.5mm;
  }
  .feat-card h4 { margin-top: 0; color: var(--accent-dark); }

  /* ---------- Dir tree ---------- */
  .tree {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
    font-size: 9.6pt;
    background: #f7f8ff;
    border: 1px solid #e0e4fb;
    border-radius: 3mm;
    padding: 3mm 4mm;
    line-height: 1.6;
    margin: 2mm 0 4mm;
    white-space: pre;
    overflow: hidden;
  }
  .tree .f { color: #0f172a; }
  .tree .d { color: var(--accent-dark); font-weight: 700; }

  /* ---------- Screen only hint ---------- */
  .screen-only {
    background: #fffbeb;
    border: 1px dashed #f5c96b;
    border-radius: 3mm;
    padding: 3mm 4mm;
    margin: 0 auto 5mm;
    color: #92400e;
    font-size: 10pt;
    max-width: 210mm;
  }
  .screen-only b { color: #78350f; }

  /* ---------- Print tweaks ---------- */
  @media print {
    body { background: #fff; }
    .sheet { margin: 0; box-shadow: none; width: 100%; }
    .screen-only { display: none; }
    a { color: inherit; text-decoration: none; }
  }
</style>
</head>
<body>

<!-- =========================================================
     SCREEN-ONLY HELP BANNER (hidden in print)
========================================================== -->
<div class="screen-only">
  <b>How to print this handout:</b> open in Chrome → press <b>Ctrl / ⌘ + P</b> → Destination: <b>Save as PDF</b> (or your lab printer) → Paper size: <b>A4</b> → Margins: <b>Default</b> → Scale: <b>Default</b> → Print. Each sheet below is already A4-sized with correct page breaks.
</div>

<!-- =========================================================
     SHEET 1 — TITLE PAGE
========================================================== -->
<section class="sheet titlepage">
  <div class="brand" aria-hidden="true"></div>
  <h1>Quiz Master</h1>
  <div class="subtitle">
    A LAN-based quiz system for classroom formative assessment.
    Teachers build quizzes with AI assistance; students join from any
    phone or laptop browser on the same Wi-Fi — live timed session,
    instant auto-grading and per-answer review.
  </div>
  <div class="chips" style="justify-content:center;">
    <span class="chip purple">Electron 43 · Desktop App</span>
    <span class="chip">Node.js 20 · Express</span>
    <span class="chip ok">SQLite 3 Persistence</span>
    <span class="chip warn">OpenAI / Gemini APIs</span>
    <span class="chip purple">WebSocket Realtime</span>
    <span class="chip">Mobile-first Web Client</span>
  </div>
  <div class="meta-grid">
    <div class="k">Course</div>          <div class="v">Application Development Laboratory</div>
    <div class="k">Submitted By</div>    <div class="v">Najim</div>
    <div class="k">Student Email</div>   <div class="v">najimchowdhury742@gmail.com</div>
    <div class="k">App Version</div>     <div class="v">v1.0.1 (commit 7abeaf7 on main)</div>
    <div class="k">GitHub Repo</div>     <div class="v">github.com/Najim742/Quiz_App</div>
    <div class="k">Submission Date</div> <div class="v">August 2026</div>
  </div>
  <div class="course-chip">Teacher Handout · Full Project Documentation</div>
</section>

<!-- =========================================================
     SHEET 2 — TABLE OF CONTENTS + 1. OVERVIEW
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Table of Contents &amp; Overview</span>
    </div>

    <h2>Table of Contents</h2>
    <ol>
      <li>Project Overview — purpose, goals, target users</li>
      <li>Key Features — teacher panel, student panel, AI tools, live session</li>
      <li>Technology Stack — libraries, versions, rationale for each choice</li>
      <li>Project Structure — folder tree + purpose of each file</li>
      <li>System Architecture — 4-tier diagram, data &amp; control flow</li>
      <li>Database Design — 5 SQLite tables with column definitions + constraints</li>
      <li>REST &amp; WebSocket API — endpoints, message contracts</li>
      <li>Electron IPC Contract — every inter-process channel (db:*, ai:*, server:*)</li>
      <li>User Manual (Teacher + Student) — click-by-click workflows</li>
      <li>AI Subsystem — settings, response schema, SVG &amp; file attachments</li>
      <li>Build &amp; Installation — run, build installers, icons</li>
      <li>Sprint Changelog + Future Roadmap</li>
      <li>Appendices — env example, default icon, .gitignore</li>
    </ol>

    <h2>1. Project Overview</h2>
    <h3>1.1 Problem Statement</h3>
    <p>
      Running a short formative quiz inside a university computer lab typically requires
      three separate tools (question authoring, distribution, and grading), plus internet
      access for every student, which is often slow or unavailable. Paper quizzes take
      hours to grade and lose the <em>"instant feedback"</em> value that formative
      assessment needs.
    </p>

    <h3>1.2 Proposed Solution — Quiz Master</h3>
    <p>
      A single cross-platform desktop application that the teacher launches on their lab PC:
    </p>
    <ul>
      <li><b>Authoring</b>: a glassmorphism UI for manual or AI-assisted MCQ creation, per-question images/PDF attachments, full library with soft-delete Recycle Bin.</li>
      <li><b>Distribution</b>: one click spins up an Express + WebSocket <em>LAN-only server</em> bound to <code>0.0.0.0</code>; students join from any browser on the same Wi-Fi by typing a LAN URL &amp; short join code.</li>
      <li><b>Live session</b>: shared countdown timer broadcast over WS, real-time connected-students list, automatic time-out submission.</li>
      <li><b>Grading</b>: pure server-side SQLite auto-grading — zero teacher work per submission.</li>
      <li><b>Feedback</b>: per-student answer review screen with correct vs. chosen options and responsive inline diagrams.</li>
    </ul>

    <h3>1.3 Target Users</h3>
    <div class="three-col">
      <div class="feat-card">
        <h4>👩‍🏫 Lab Instructor</h4>
        <p>Runs the Electron app; creates quizzes; starts/stops LAN sessions; exports submission CSV; reviews history.</p>
      </div>
      <div class="feat-card">
        <h4>🎓 University Student</h4>
        <p>Joins from personal phone/laptop over lab Wi-Fi (no install, no account, no internet).</p>
      </div>
      <div class="feat-card">
        <h4>🏛 University Department</h4>
        <p>Runs self-hosted on existing lab PCs; all data stays local on the teacher's machine (GDPR / campus-policy friendly).</p>
      </div>
    </div>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 2 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 3 — 2. FEATURES + 3. STACK
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Key Features · Technology Stack</span>
    </div>

    <h2>2. Key Features</h2>
    <div class="two-col">
      <div>
        <h3>2.1 Teacher Panel (Electron Desktop)</h3>
        <ul>
          <li>7 sidebar views: Dashboard, Create Quiz, Live Session, History, Students, Recycle Bin, Connected Students.</li>
          <li>Full CRUD for MCQ bank: 4 options (A/B/C/D), per-question image with custom max-width/height, soft-delete + restore.</li>
          <li>Student roster manager: bulk create with normalized registration number, grouping by department / batch / session / semester.</li>
          <li>✨ AI Tools (top toolbar, pinned pill button): chat-based assistant that previews JSON questions then fills the form on approval.</li>
          <li>⚙️ AI Settings modal (no restart): provider (Auto / OpenAI / Gemini), API keys, model text, temperature slider, max tokens.</li>
          <li>Per-session filters: restrict who can join by dept, session year, semester, batch.</li>
          <li>Live WebSocket dashboard with count-down timer + connected list + per-submission notifications.</li>
          <li>Session history, results modal, one-click CSV export of submissions.</li>
        </ul>
      </div>
      <div>
        <h3>2.2 Student Panel (Any Browser, LAN)</h3>
        <ul>
          <li>Zero install: any browser on Android/iOS/macOS/Windows/Linux — same URL on the lab Wi-Fi.</li>
          <li>Login via registration number + department + session year (preloaded from teacher's roster).</li>
          <li>Shared server-side quiz start time &amp; duration with mini floating sticky timer.</li>
          <li>Mobile-first responsive MCQ view; question images capped with <code>.question-image</code> (max-width 100%, max-height 50vh → 40vh at 480px breakpoint).</li>
          <li>Manual "Submit" or auto submit at timeout (WS message <code>teacher:quizStop</code>).</li>
          <li>Instant score page (correct / total, percentage, completion status).</li>
          <li>Full per-answer review screen (green correct badge, red wrong-answer badge, reusable image components).</li>
        </ul>

        <h3>2.3 Cross-cutting</h3>
        <ul>
          <li>Soft-delete architecture for quizzes, students, and sessions — Recycle Bin view with Restore / Permanent Delete.</li>
          <li>Migrate-on-boot DB schema with existence checks for every added column (safe for upgrades).</li>
          <li>Glassmorphism neutral-gray / blue-purple aesthetic shared across both panels.</li>
          <li>Hardened secrets management: <code>.env</code> + runtime <code>ai-settings.json</code> both gitignored.</li>
        </ul>
      </div>
    </div>

    <h2>3. Technology Stack</h2>
    <table>
      <thead><tr><th>Layer</th><th>Library / Tool</th><th>Version</th><th>Purpose &amp; Rationale</th></tr></thead>
      <tbody>
        <tr><td>Desktop Shell</td><td>Electron</td><td>43.x</td><td>Single codebase for Windows / macOS / Linux installers; IPC separation between UI (renderer) and DB/AI/Server (main).</td></tr>
        <tr><td>Runtime</td><td>Node.js</td><td>20 LTS</td><td>Async-first stdlib, CommonJS module system, NPM ecosystem.</td></tr>
        <tr><td>LAN Server</td><td>Express</td><td>5.x</td><td>HTTP routes for student REST API; serves static student client from <code>/src/static</code>.</td></tr>
        <tr><td>Realtime</td><td>ws (WebSocket)</td><td>8.x</td><td>Server ↔ teacher + server ↔ students: quiz start/stop/timer sync, per-submission push.</td></tr>
        <tr><td>Database</td><td>better-sqlite3-style driver (<code>sqlite3</code>)</td><td>6.x</td><td>Zero-config embedded SQL DB — single file in userData; no server install required in lab.</td></tr>
        <tr><td>CORS</td><td><code>cors</code></td><td>2.x</td><td>Permissive for the LAN-only Express server (students connect from any local device).</td></tr>
        <tr><td>CSV Export</td><td><code>csv-writer</code></td><td>1.6.x</td><td>Well-typed CSV writer for "Export Session Results" button.</td></tr>
        <tr><td>Build / Pack</td><td>electron-builder</td><td>(devDependency)</td><td>Produces Windows NSIS/Portable + Linux AppImage/deb.</td></tr>
        <tr><td>Rendering</td><td>Vanilla JS (no framework)</td><td>—</td><td>Intentional: App Dev course learning outcome — full understanding of DOM/fetch/WS rather than React abstraction.</td></tr>
        <tr><td>Styling</td><td>Plain CSS3 + glassmorphism</td><td>—</td><td>Custom tokens, backdrop-blur, 768/480 px mobile breakpoints, no runtime CSS lib.</td></tr>
        <tr><td>AI Providers</td><td>OpenAI, Google Gemini</td><td>REST</td><td>Pluggable via settings; provider can be forced to OpenAI-only / Gemini-only / Auto by key presence.</td></tr>
      </tbody>
    </table>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 3 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 4 — 4. PROJECT STRUCTURE + 5. ARCHITECTURE
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Project Structure · System Architecture</span>
    </div>

    <h2>4. Project Structure</h2>
    <div class="tree"><span class="d">Quizz_APP_PIG/</span>
├── <span class="d">assets/</span>
│   ├── <span class="d">build/</span>                 Per-size PNG intermediates (16→512 px)
│   ├── icon.ico                     ← Windows installer icon (10 PNG-in-ICO)
│   ├── icon.png                     ← Linux icon target (512×512)
│   └── logo.svg                     ← Canonical SVG logo (Lucide Layers, #2563EB)
├── <span class="d">scripts/</span>
│   └── build-ico.js                 Node PNG→ICO packer (10 sRGB entries)
├── <span class="d">slides/</span>
│   └── index.html                   Lab-presentation slide deck (9 slides)
├── <span class="d">src/</span>
│   ├── <span class="d">main/</span>
│   │   └── main.js                  Electron boot, BrowserWindow, 60+ ipcMain handlers
│   ├── <span class="d">renderer/</span>              TEACHER PANEL (Chromium renderer)
│   │   ├── index.html               7 sidebar views + 2 modals + AI overlay
│   │   ├── renderer.js              View switches, forms, AI chat, settings modal
│   │   └── style.css                Glassmorphism CSS (chatbot-fab, AI overlay, settings)
│   ├── <span class="d">server/</span>
│   │   ├── db.js                    SQLite schema (5 tables), soft-delete CRUD (dbApi)
│   │   ├── quizAssistant.js         AI runtime settings, LLM calls, SVG/attachments
│   │   └── server.js                Express REST + WebSocket (startServer/stopServer)
│   └── <span class="d">static/</span>                STUDENT PANEL (served by Express)
│       ├── index.html               Join / Login / Quiz / Result / Answer-Review views
│       ├── student.js               Login, WS connect, timer, renderQuestions, submit
│       └── style.css                Mobile-first responsive styles, .question-image
├── <span class="d">node_modules/</span>               (gitignored)
├── .env.example                     Placeholder API keys / port (committed)
├── .gitignore                       Blocks .env, ai-settings.json, sqlite, dist, node_modules
├── package.json                     Dependencies + electron-builder win/linux targets
└── README.md                        (if present — short run instructions)</div>

    <h2>5. System Architecture</h2>
    <h3>5.1 Four-Tier Deployment Diagram</h3>
<pre>
┌───────────────────────────────────────────────────────────────────────┐
│  TEACHER'S LAB PC (one machine, runs everything)                      │
│                                                                       │
│  ┌────────────────────────────────┐  ┌──────────────────────────────┐ │
│  │  Electron Renderer Process     │  │  Electron Main (Node.js)     │ │
│  │  (Chromium, teacher UI)        │  │                              │ │
│  │  · 7 sidebar views             │  │  · BrowserWindow lifecycle   │ │
│  │  · Quiz forms / AI chat        │  │  · ipcMain.handle(60 chans)  │ │
│  │  · Settings modal, CSV UI      │◄─┼─►· startServer / stopServer  │ │
│  └────────────────────────────────┘  │  · csv export, file dialog   │ │
│                  ▲ IPC                │  · loadAISettings() at boot │ │
│                  │                    └─────────────┬────────────────┘ │
│                  │                                  │ calls into       │
│                  │                                  ▼                  │
│  ┌────────────────────────────────┐  ┌──────────────────────────────┐ │
│  │  Express LAN Server 0.0.0.0    │  │  SQLite (single .db file)    │ │
│  │  · Static /student client      │  │  · 5 tables, soft-del       │ │
│  │  · REST /api/**                │◄─┼─►· CRUD via dbApi (Promises) │ │
│  │  · ws:// (8443) broadcaster    │  │  · Auto ALTER TABLE on boot │ │
│  └────────┬───────────────────────┘  └──────────────────────────────┘ │
└───────────┼───────────────────────────────────────────────────────────┘
            │ HTTP + WS  (lab Wi-Fi, 192.168.x.x)
            ▼
  ┌────────────────────────────────┐     ┌──────────────────────────────┐
  │  STUDENT 1 — Phone / Laptop    │     │  STUDENT N — Any browser    │
  │  · GET /join/ABCD              │ ... · Login → Quiz → Submit      │
  │  · student.js (fetch + ws)     │     · Result, Answer Review      │
  └────────────────────────────────┘     └──────────────────────────────┘
</pre>

    <h3>5.2 Flow of a Typical 5-Minute Lab Quiz</h3>
    <ol>
      <li><b>Teacher opens Quiz Master</b> → <code>app.on('ready')</code> creates <code>BrowserWindow</code>, loads <code>quizAssistant.loadAISettings()</code> from userData, inits SQLite schema via <code>initDb()</code>.</li>
      <li><b>Create Quiz</b> view → manual questions OR <code>ipcRenderer.invoke('ai:generateQuizQuestions', prompt)</code> → <code>generateQuizAssistantResponse()</code> → JSON preview → "Fill Questions".</li>
      <li><b>Create Session</b> → short code (ABCD) saved in <code>sessions</code> table; teacher clicks <b>Start Server</b> (ipc <code>toggle-server</code> → <code>startServer(port)</code>).</li>
      <li><b>Students</b> visit <code>http://LAN-IP:port/join/ABCD</code> → Express serves static <code>src/static/index.html</code>; <code>POST /api/students/login</code> validates their registration number against <code>students</code> table.</li>
      <li>Teacher presses <b>Start Quiz</b> → WS broadcasts <code>server:startQuiz</code> with startTime &amp; duration to all connected students.</li>
      <li>Each student answers, submits or auto-times-out → WS <code>student:submit</code> → server saves <code>submissions</code> row with JSON answers, computes <code>score</code>.</li>
      <li>Result page → Review Answers screen → session ends. Teacher can <b>Export CSV</b> (<code>ipc: export-csv</code> → <code>createObjectCsvWriter</code>) or browse History view.</li>
    </ol>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 4 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 5 — 6. DATABASE DESIGN (students + quizzes + q)
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Database Design (SQLite 3)</span>
    </div>

    <h2>6. Database Design</h2>
    <p>
      Single embedded SQLite database file stored inside Electron's
      <code>app.getPath('userData')/quizmaster.db</code>. Schema is applied idempotently
      on every boot with <code>CREATE TABLE IF NOT EXISTS</code> followed by per-column
      existence checks — upgrades are drop-in safe for future versions.
    </p>

    <h3>6.1 Table 1 — <code>students</code> (Roster)</h3>
    <table class="tbl-small">
      <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>INTEGER</td><td>PRIMARY KEY AUTOINCREMENT</td><td>Internal row id.</td></tr>
        <tr><td>registration_number</td><td>TEXT</td><td>NOT NULL UNIQUE, normalized on insert</td><td>Lookup key for student login. Normalized: lowercase, stripped of dashes and spaces.</td></tr>
        <tr><td>roll_number</td><td>TEXT</td><td>NOT NULL</td><td>Class roll number (displayed on results).</td></tr>
        <tr><td>full_name</td><td>TEXT</td><td>NOT NULL</td><td>Full student name.</td></tr>
        <tr><td>semester</td><td>TEXT</td><td>NOT NULL</td><td>e.g. "4<sup>th</sup>", "6<sup>th</sup>".</td></tr>
        <tr><td>session_year</td><td>TEXT</td><td>NOT NULL</td><td>e.g. "2024-2025". Used in student login.</td></tr>
        <tr><td>department</td><td>TEXT</td><td>NOT NULL</td><td>e.g. "CSE", "EEE". Used in login &amp; session filters.</td></tr>
        <tr><td>batch</td><td>TEXT</td><td>NOT NULL</td><td>e.g. "2022".</td></tr>
        <tr><td>verified</td><td>INTEGER</td><td>DEFAULT 1</td><td>Always 1 in current implementation; reserved for manual approval future flow.</td></tr>
        <tr><td>deleted</td><td>INTEGER</td><td>DEFAULT 0</td><td>Soft-delete flag. Recycle Bin view + Restore.</td></tr>
      </tbody>
    </table>

    <h3>6.2 Table 2 — <code>quizzes</code> (Question Bank)</h3>
    <table class="tbl-small">
      <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>INTEGER</td><td>PRIMARY KEY AUTOINCREMENT</td><td>Foreign key target of questions &amp; sessions.</td></tr>
        <tr><td>title</td><td>TEXT</td><td>NOT NULL</td><td>Displayed on library and student start-screen.</td></tr>
        <tr><td>duration</td><td>INTEGER</td><td>DEFAULT 60</td><td>Quiz duration in <b>minutes</b>; converted to seconds when broadcast over WS.</td></tr>
        <tr><td>semester</td><td>TEXT</td><td>—</td><td>Optional grouping tag.</td></tr>
        <tr><td>session</td><td>TEXT</td><td>—</td><td>Optional session-year tag.</td></tr>
        <tr><td>deleted</td><td>INTEGER</td><td>DEFAULT 0</td><td>Soft-delete flag; Restore / Permanent Delete in Recycle Bin.</td></tr>
      </tbody>
    </table>

    <h3>6.3 Table 3 — <code>questions</code> (Per-Quiz MCQ Questions)</h3>
    <table class="tbl-small">
      <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>INTEGER</td><td>PRIMARY KEY AUTOINCREMENT</td><td>Question id.</td></tr>
        <tr><td>quiz_id</td><td>INTEGER</td><td>FK → quizzes(id) ON DELETE CASCADE</td><td>Deleting a quiz deletes every row here automatically.</td></tr>
        <tr><td>text</td><td>TEXT</td><td>NOT NULL</td><td>Question stem (may contain markup/text).</td></tr>
        <tr><td>opt_a / opt_b / opt_c / opt_d</td><td>TEXT</td><td>NOT NULL each</td><td>Four MCQ distractors.</td></tr>
        <tr><td>correct_opt</td><td>TEXT</td><td>NOT NULL</td><td>Case-insensitive letter: <code>A</code> / <code>B</code> / <code>C</code> / <code>D</code>.</td></tr>
        <tr><td>image</td><td>TEXT</td><td>NULLABLE</td><td>Inline Data URI (<code>data:image/png;base64,…</code>). Never stored on filesystem — fully portable with the DB.</td></tr>
        <tr><td>image_width</td><td>INTEGER</td><td>NULLABLE</td><td>Optional max-width cap (rendered as <code>max-width</code> CSS).</td></tr>
        <tr><td>image_height</td><td>INTEGER</td><td>NULLABLE</td><td>Optional max-height cap (rendered as <code>max-height</code> CSS).</td></tr>
      </tbody>
    </table>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 5 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 6 — 6. DATABASE (sessions + submissions) + 7. REST
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Database (ctd.) · REST API</span>
    </div>

    <h3>6.4 Table 4 — <code>sessions</code> (Quiz Event Instances)</h3>
    <p>Each time the teacher picks a quiz and clicks "Create Session," one row is written with a short 4-char join code. Students provide this code on the Join page so the server knows which quiz they are taking.</p>
    <table class="tbl-small">
      <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>INTEGER</td><td>PRIMARY KEY AUTOINCREMENT</td><td>FK target of submissions.</td></tr>
        <tr><td>code</td><td>TEXT</td><td>NOT NULL UNIQUE</td><td>Short case-insensitive join code (e.g. <code>A3F9</code>).</td></tr>
        <tr><td>quiz_id</td><td>INTEGER</td><td>FK → quizzes(id)</td><td>The quiz being administered.</td></tr>
        <tr><td>status</td><td>TEXT</td><td>DEFAULT 'active'</td><td><code>active</code> / <code>ended</code> / teacher's custom labels.</td></tr>
        <tr><td>created_at</td><td>DATETIME</td><td>DEFAULT CURRENT_TIMESTAMP</td><td>Used for History view ordering.</td></tr>
        <tr><td>show_answers</td><td>INTEGER</td><td>DEFAULT 0</td><td>Teacher-controlled flag; when 1, Answer-Review screen is unlocked on the student client.</td></tr>
        <tr><td>deleted</td><td>INTEGER</td><td>DEFAULT 0</td><td>Soft-delete flag.</td></tr>
        <tr><td>filter_department / _session_year / _semester / _batch</td><td>TEXT</td><td>Each NULLABLE</td><td>Optional attendance filters — server rejects login/join if student's record does not match.</td></tr>
      </tbody>
    </table>

    <h3>6.5 Table 5 — <code>submissions</code> (Student Attempts)</h3>
    <table class="tbl-small">
      <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>INTEGER</td><td>PRIMARY KEY AUTOINCREMENT</td><td>Attempt id.</td></tr>
        <tr><td>session_id</td><td>INTEGER</td><td>FK → sessions(id)</td><td>Session this attempt belongs to.</td></tr>
        <tr><td>registration_number</td><td>TEXT</td><td>—</td><td>Denormalized copy — CSV reporting without joins.</td></tr>
        <tr><td>roll</td><td>TEXT</td><td>NOT NULL</td><td>Roll number (displayed on results screen).</td></tr>
        <tr><td>name</td><td>TEXT</td><td>NOT NULL</td><td>Full name snapshot at submit time.</td></tr>
        <tr><td>semester</td><td>TEXT</td><td>—</td><td>Denormalized grouping for CSV rows.</td></tr>
        <tr><td>answers</td><td>TEXT</td><td>NOT NULL</td><td>Serialized JSON: <code>{"&lt;qId&gt;":"A","&lt;qId2&gt;":"C", …}</code>.</td></tr>
        <tr><td>score</td><td>INTEGER</td><td>NOT NULL</td><td>Count of correct answers — computed server-side on every submit (never trust client).</td></tr>
        <tr><td>timed_out</td><td>BOOLEAN</td><td>DEFAULT 0</td><td>1 if auto-submitted by the server because duration expired.</td></tr>
      </tbody>
    </table>

    <h2>7. REST &amp; WebSocket API</h2>
    <h3>7.1 Student-Facing REST API (Express — <code>server.js</code>)</h3>
    <p>Served from the LAN-only Express app at <code>http://&lt;LAN-IP&gt;:&lt;port&gt;/api/**</code>.</p>
    <table class="tbl-small">
      <thead><tr><th>Method</th><th>Route</th><th>Request Body / Params</th><th>Response</th><th>Used By</th></tr></thead>
      <tbody>
        <tr><td>GET</td><td>/join/:code</td><td>URL param <code>code</code></td><td>Serves <code>static/index.html</code> (student SPA).</td><td>Student browser URL bar.</td></tr>
        <tr><td>GET</td><td>/api/students/sessions</td><td>—</td><td>Unique <code>session_year[]</code> values for login dropdown.</td><td>student.js login form (populate).</td></tr>
        <tr><td>GET</td><td>/api/students/departments</td><td>—</td><td>Unique <code>department[]</code> values.</td><td>student.js login form (populate).</td></tr>
        <tr><td>POST</td><td>/api/students/login</td><td><code>{registrationNumber, sessionYear, department}</code></td><td>Student row on 200; 404 if not found.</td><td>student.js login.</td></tr>
        <tr><td>GET</td><td>/api/quizzes</td><td>—</td><td>Array of quizzes (title, duration, id).</td><td>Teacher REST debug / extensibility.</td></tr>
        <tr><td>POST</td><td>/api/quizzes</td><td><code>{title, duration, semester}</code></td><td><code>{id, title, duration, semester}</code>.</td><td>HTTP quiz creation (same as IPC).</td></tr>
        <tr><td>DELETE</td><td>/api/quizzes/:id</td><td>URL param id</td><td><code>{success: true}</code>.</td><td>HTTP delete (soft).</td></tr>
        <tr><td>GET</td><td>/api/quizzes/:id/questions</td><td>URL param quiz id</td><td>Array of questions (all four options + correct_opt + image).</td><td>Student client (when quiz starts).</td></tr>
        <tr><td>GET</td><td>/api/active-session</td><td>query: <code>?code=ABCD</code></td><td>Active session object (quiz, filters, status) + student questions.</td><td>Join button in student.js.</td></tr>
        <tr><td>POST</td><td>/api/submit</td><td><code>{sessionId, studentId, name, roll, answers, timedOut}</code></td><td><code>{score, submissionId, totalQuestions}</code>.</td><td>Submit button / timeout.</td></tr>
        <tr><td>GET</td><td>/api/sessions/:id/questions</td><td>URL param session id</td><td>Questions + correct answer key (only if <code>sessions.show_answers=1</code>).</td><td>View Answer-Review button.</td></tr>
      </tbody>
    </table>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 6 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 7 — 7.2 WEBSOCKET + 8. IPC
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>WebSocket Protocol · IPC Contract</span>
    </div>

    <h3>7.2 WebSocket Protocol (<code>ws</code> library, same port as HTTP)</h3>
    <p>
      Two WS "roles" exist per connection: the Teacher UI (single client, registers with a
      <code>hello:teacher</code> message), and any number of connected Student browsers
      (registers as <code>hello:student</code>). All messages are plain JSON with a
      <code>{type, payload}</code> envelope.
    </p>

    <table class="tbl-small">
      <thead><tr><th>Direction</th><th>type</th><th>payload shape</th><th>When sent</th></tr></thead>
      <tbody>
        <tr><td>T→S</td><td><code>hello:teacher</code></td><td>—</td><td>Teacher Live-Session view WS connects. Server caches socket as <code>teacherWs</code>.</td></tr>
        <tr><td>S→T</td><td><code>hello:teacher</code></td><td>—</td><td>Ack; server enables student-to-teacher push on this socket.</td></tr>
        <tr><td>St→S</td><td><code>hello:student</code></td><td><code>{sessionCode, studentId, name, roll, regNo}</code></td><td>Student joins. Server adds to activeSession.connectedStudents.</td></tr>
        <tr><td>S→T</td><td><code>server:studentJoined</code></td><td>Full updated connected-students list</td><td>Teacher UI live list re-renders.</td></tr>
        <tr><td>T→S</td><td><code>teacher:startQuiz</code></td><td><code>{startTime (ISO), durationSec}</code></td><td>Teacher clicks "Start". Server broadcasts <code>server:startQuiz</code> to every student socket.</td></tr>
        <tr><td>S→St</td><td><code>server:startQuiz</code></td><td><code>{startTime, duration, questions[]}</code></td><td>Student client starts timer, renders Questions view.</td></tr>
        <tr><td>T→S</td><td><code>teacher:quizStop</code></td><td>—</td><td>Manual end-time or timer hits 0. Server auto-submits any still-connected students who have not submitted, then emits to each client.</td></tr>
        <tr><td>S→St</td><td><code>server:quizEnded</code></td><td><code>{ended: true}</code></td><td>Client unlocks result screen.</td></tr>
        <tr><td>St→S</td><td><code>student:submit</code></td><td><code>{sessionId, studentId, roll, name, semester, answers{qId→opt}, timedOut}</code></td><td>Student clicks "Submit Quiz" (or timeout).</td></tr>
        <tr><td>S→St</td><td><code>server:submitted</code></td><td><code>{score}</code></td><td>Ack to submitter with score.</td></tr>
        <tr><td>S→T</td><td><code>server:submission</code></td><td>Full submission row</td><td>Teacher Live view shows each attempt + score in real time.</td></tr>
      </tbody>
    </table>

    <h2>8. Electron IPC Contract (Main ⇄ Renderer)</h2>
    <p>
      All UI-side calls flow through preload-less <code>ipcRenderer</code> in the renderer
      process. Because the renderer window loads <code>file://…/renderer/index.html</code>
      with default <code>nodeIntegration: false</code> / <code>contextIsolation: true</code>
      protected options, the IPC handlers are intentionally a small, clean surface —
      exactly one channel per operation. Below is every handler registered in
      [main.js](file:///home/najim/Documents/Quizz_APP_PIG/src/main/main.js).
    </p>

    <h3>8.1 Server Control</h3>
    <table class="tbl-small">
      <thead><tr><th>Channel</th><th>Arguments</th><th>Returns</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td><code>get-server-info</code></td><td>—</td><td><code>{lanUrls[], port, running}</code></td><td>Teacher "Server Status" card.</td></tr>
        <tr><td><code>get-server-status</code></td><td>—</td><td><code>{running, url, code?}</code></td><td>Polled/UI updates.</td></tr>
        <tr><td><code>toggle-server</code></td><td>—</td><td>New state object.</td><td>Idempotent; toggles <code>startServer() / stopServer()</code>.</td></tr>
      </tbody>
    </table>

    <h3>8.2 AI Layer</h3>
    <table class="tbl-small">
      <thead><tr><th>Channel</th><th>Arguments</th><th>Returns</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td><code>ai:generateQuizQuestions</code></td><td>payload {prompt, attachments[]?, history[]?}</td><td>{assistantMessage, questions[], svgContent?}</td><td>quizAssistant.js handles provider selection, key lookup (env first, then runtime settings), requestOpenAI/requestGemini fallback.</td></tr>
        <tr><td><code>ai:getSettings</code></td><td>—</td><td>Effective settings with defaults filled in.</td><td>Called every time Settings modal is opened.</td></tr>
        <tr><td><code>ai:saveSettings</code></td><td>settings object</td><td><code>{ok: true}</code>.</td><td>Writes userData/ai-settings.json; runtime cache updated. Effective NEXT request.</td></tr>
      </tbody>
    </table>

    <h3>8.3 Database (Teachers + Quizzes)</h3>
    <table class="tbl-small">
      <thead><tr><th>Channel Prefix</th><th># of Ops</th><th>Representative Operations</th></tr></thead>
      <tbody>
        <tr><td><code>db:getQuizzes / getQuizById / createQuiz</code></td><td>3</td><td>CRUD for quizzes table (soft delete).</td></tr>
        <tr><td><code>db:deleteQuiz / deleteQuizzes (bulk)</code></td><td>2</td><td>Soft delete.</td></tr>
        <tr><td><code>db:addQuestion / updateQuestion / deleteQuestion / getQuestionsByQuiz</code></td><td>4</td><td>Full CRUD for each question in a quiz (including image/data-URI columns).</td></tr>
        <tr><td><code>db:getAllStudents / createStudent / createStudents / deleteStudent / deleteStudentsByGroup</code></td><td>5</td><td>Roster CRUD; bulk insert for CSV/typed lists; group delete.</td></tr>
        <tr><td><code>db:getUniqueSessionYears / Departments / Semesters / Batches / StudentGroups</code></td><td>5</td><td>Login dropdown data sources (student panel) and filter groups.</td></tr>
      </tbody>
    </table>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 7 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 8 — 8. IPC (ctd sessions + recycle + CSV) + 9. USER MANUAL
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>IPC (ctd.) · User Manual (Teacher)</span>
    </div>

    <h3>8.4 Database (Sessions + Results + Recycle Bin)</h3>
    <table class="tbl-small">
      <thead><tr><th>Channel</th><th>Arguments</th><th>Returns / Behaviour</th></tr></thead>
      <tbody>
        <tr><td><code>db:createSession</code></td><td>code, quizId, filterDept, filterSessionYear, filterSem, filterBatch</td><td>Writes sessions row; returns id+code.</td></tr>
        <tr><td><code>db:getSessionsHistory</code></td><td>—</td><td>Non-deleted sessions list for History view.</td></tr>
        <tr><td><code>db:getSessionById</code></td><td>sessionId</td><td>Session row + quiz title.</td></tr>
        <tr><td><code>db:toggleShowAnswers</code></td><td>sessionId</td><td>Flips show_answers 0↔1 (gates student answer-review).</td></tr>
        <tr><td><code>db:getSessionQuestionsAndAnswers</code></td><td>sessionId</td><td>For Results modal: questions + each student submission's chosen vs correct.</td></tr>
        <tr><td><code>db:getSubmissionsBySession</code></td><td>sessionId</td><td>Submission rows table (name, score, timed-out…).</td></tr>
        <tr><td><code>db:deleteSession / deleteSessions (bulk)</code></td><td>sessionId(s)</td><td>Soft-delete (moves to Recycle Bin).</td></tr>
        <tr><td><code>db:getDeletedItems</code></td><td>—</td><td>Combined list of deleted quizzes/sessions/students for Recycle Bin.</td></tr>
        <tr><td><code>db:restoreQuiz / restoreQuizzes / restoreStudent / restoreSession / restoreSessions</code></td><td>id(s)</td><td>Flips deleted=0.</td></tr>
        <tr><td><code>db:permanentDeleteQuiz / Quizzes / Student / Session / Sessions</code></td><td>id(s)</td><td>Real SQL DELETE — unrecoverable (confirm dialog in UI).</td></tr>
        <tr><td><code>export-csv</code></td><td>sessionId</td><td>Opens native Save-file dialog, writes CSV via csv-writer to chosen path.</td></tr>
      </tbody>
    </table>
    <p><i>Total IPC channels as of v1.0.1:</i> <b>60+</b> (1 server-info group, 3 AI channels, 19 quiz+question channels, 15 student+groups channels, 10 session+submission channels, 13 recycle-bin operations, 1 export).</p>

    <h2>9. User Manual</h2>
    <h3>9.1 Teacher — Step-by-Step Workflow (click-by-click)</h3>
    <ol>
      <li><b>Install / Launch</b>: run the installer or <code>npm start</code>. The Electron window opens on the Dashboard view.</li>
      <li>
        <b>Step 1 — Import students</b> (once per semester). Open the <b>Students</b> sidebar:
        <ul>
          <li>Add Single Student: fill Registration No / Roll / Name / Dept / Semester / Session / Batch.</li>
          <li>Or, bulk paste a list of students.</li>
        </ul>
      </li>
      <li>
        <b>Step 2 — Create a quiz</b>. Open <b>Create Quiz</b> in the sidebar:
        <ul>
          <li>Fill Title (e.g. "HTML Forms Quiz"), Duration (minutes), Semester, Session tags.</li>
          <li>Click <b>✨ AI Tools</b> (top-right pill in the toolbar — pinned, never moves on scroll). Optionally open ⚙️ Settings first (provider, API key, temp 0.8, max 2800 → Save).</li>
          <li>Type a prompt like "Generate 5 MCQs on HTML forms and input types, include one with a CSS label example". Chat replies with JSON. Click <b>Preview</b>, then <b>Fill Questions</b> — questions land in the form.</li>
          <li>Manually tweak wording or click <b>🖼 Attach</b> to add an image to Q1.</li>
          <li>Click <b>Save Quiz</b>. The quiz appears in the Dashboard Quiz Library.</li>
        </ul>
      </li>
      <li>
        <b>Step 3 — Start a live session</b>. Go to <b>Live Session</b> or Quiz Library → Start:
        <ul>
          <li>Pick your quiz. Optionally add filter by Department / Session / Semester / Batch so only matching students can join.</li>
          <li>Click <b>Create Session</b> — short join code appears.</li>
          <li>Click <b>Start Server</b>. Status changes to Running, with one or more LAN URLs (<code>http://192.168.x.x:PORT</code>).</li>
          <li>Write this URL and join code on the lab whiteboard. Tell students: "Open Chrome on your phone, type this URL, enter this code, log in with your reg number."</li>
        </ul>
      </li>
      <li>
        <b>Step 4 — Run the quiz</b>. On <b>Live Session</b>:
        <ul>
          <li>Watch the connected-students list populate in real time.</li>
          <li>When everyone is in, click <b>Start Quiz</b>. Countdown timer starts for you + every student simultaneously.</li>
          <li>Student answers arrive in real-time on your screen.</li>
        </ul>
      </li>
      <li><b>Step 5 — End &amp; Review</b>. Timer hits zero (or click <b>End Quiz</b>). Go to History → pick session → Results modal → toggle Show Answers → click <b>Export CSV</b>.</li>
      <li>To permanently clean up: Recycle Bin view → select old quizzes/sessions → Restore or Permanent Delete.</li>
    </ol>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 8 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 9 — 9. USER MANUAL Student + 10. AI subsystem
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>User Manual (Student) · AI Subsystem</span>
    </div>

    <h3>9.2 Student — Step-by-Step Workflow</h3>
    <ol>
      <li><b>Join the lab Wi-Fi</b>. No internet or app install needed.</li>
      <li>Open Chrome / Safari / Edge on <b>any device</b> (Android, iPhone, laptop). Type the LAN URL the teacher wrote on the whiteboard into the address bar and press enter.</li>
      <li>Type the <b>4-char join code</b> (e.g. <code>X7K2</code>) into the Join Code screen and tap <b>Join Quiz</b>.</li>
      <li>
        <b>Log in</b> (appears only if teacher enforced roster):
        <ul>
          <li>Pick <b>Department</b> and <b>Session Year</b> from dropdowns.</li>
          <li>Type your <b>Registration Number</b> exactly as submitted to the teacher.</li>
          <li>Tap <b>Login</b>. Your Name &amp; Roll appear at the top-right if matched.</li>
        </ul>
      </li>
      <li><b>Wait for teacher</b> on the "Waiting for quiz to start…" screen. A sticky countdown banner animates in when the quiz begins.</li>
      <li>
        <b>Answer questions</b>:
        <ul>
          <li>Select option A/B/C/D per card. Change your mind any time before submit.</li>
          <li>Scroll down — a small mini-floating timer follows you so you never lose track.</li>
          <li>Images resize automatically (even on small phones) to avoid cutoff or horizontal scrolling.</li>
        </ul>
      </li>
      <li>
        <b>Submit</b>:
        <ul>
          <li>Tap <b>Submit Quiz</b> when done — OR — if the countdown reaches 0:00, the app auto-submits whatever you've chosen so far.</li>
          <li>Your result page loads instantly: <code>3 / 5 correct · 60%</code>.</li>
          <li>Tap <b>Review Answers</b> (only if the teacher unlocked it) to see which correct answer you missed on each question, green vs. red badges, and the original diagram/question image in readable size.</li>
        </ul>
      </li>
    </ol>

    <h2>10. AI Subsystem</h2>
    <h3>10.1 Settings Modal (⚙️ gear inside ✨ AI Tools popup)</h3>
    <table class="tbl-small">
      <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>AI Provider</td><td>Dropdown: Auto / OpenAI / Google Gemini</td><td>Auto</td><td>Auto = pick whichever key is present; force if you only have one provider.</td></tr>
        <tr><td>OpenAI API Key</td><td>Password input</td><td>Fallback from <code>.env → OPENAI_API_KEY</code></td><td>Saved in userData JSON, never in repo.</td></tr>
        <tr><td>OpenAI Model</td><td>Text</td><td><code>gpt-4.1-mini</code></td><td>Override to any chat completions model id.</td></tr>
        <tr><td>Google Gemini API Key</td><td>Password input</td><td>Fallback from <code>.env → GOOGLE_API_KEY</code></td><td>Works for free-tier keys.</td></tr>
        <tr><td>Google Gemini Model</td><td>Text</td><td><code>gemini-3.5-flash</code></td><td>Works for Flash / Pro ids.</td></tr>
        <tr><td>Temperature</td><td>Range slider 0.0 to 2.0, live value badge</td><td>0.6</td><td>0 = factual/deterministic; 1 = varied; 2 = weird.</td></tr>
        <tr><td>Max Tokens</td><td>Number input (clamped on save)</td><td>1400</td><td>Max output token budget. Use 2500+ for 8+ MCQs + SVG.</td></tr>
      </tbody>
    </table>

    <h3>10.2 Storage &amp; Persistence</h3>
    <ul>
      <li><b>Runtime settings file</b>: <code>app.getPath('userData')/ai-settings.json</code>. Created on first "Save Settings" click. <b>Gitignored</b> by exact name AND by pattern in <code>.gitignore</code> (defense-in-depth).</li>
      <li><b>Layered lookup order per request</b>: 1) runtime settings, 2) <code>.env</code> if unset, 3) built-in defaults 0.6/1400/gpt-4.1-mini/gemini-3.5-flash.</li>
      <li><b>Instant</b>: Next AI chat request uses new settings — zero Electron restart.</li>
    </ul>

    <h3>10.3 Response Schema (used by renderer.js to build UI)</h3>
<pre>
{
  "assistantMessage": string,    // prose reply the AI typed in the chat bubble
  "questions": [                 // empty array if only chit-chat / math help
    {
      "text": string,            // question stem (required)
      "option_a": string,        // 4 options, always present for MCQ
      "option_b": string,
      "option_c": string,
      "option_d": string,
      "correct_option": "A|B|C|D",
      "explanation": string?     // optional "why this is correct" line
    },
    …
  ],
  "svgContent": string?          // optional inline SVG markup (diagrams, charts)
}
</pre>
    <h3>10.4 Attachments &amp; SVG Diagrams</h3>
    <ul>
      <li><b>Attachments</b> (teacher drags into AI chat): PNG/JPEG, PDF, TXT, CSV, JSON up to 10 MB. Text extracted and appended to the LLM prompt so it can ask questions about uploaded handouts.</li>
      <li><b>SVG output</b>: when user asks for a diagram, LLM is instructed to emit raw SVG markup in <code>svgContent</code>. Renderer renders it inline with <b>Download SVG</b> + <b>Copy SVG</b> buttons. No raster (image-gen) API calls — SVG always printable/crisp at any size.</li>
      <li><b>No raster image API fallback</b> (environment unreliable — removed per prior sprint).</li>
    </ul>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 9 / 10</span>
    </div>
  </div>
</section>

<!-- =========================================================
     SHEET 10 — 11. BUILD / INSTALL + 12. CHANGELOG + 13. ROADMAP
========================================================== -->
<section class="sheet">
  <div class="content">
    <div class="pagehead">
      <span class="brandmark">QUIZ MASTER · DOCUMENTATION</span>
      <span>Build &amp; Installation · Changelog · Roadmap</span>
    </div>

    <h2>11. Build &amp; Installation</h2>
    <h3>11.1 Prerequisites (dev machine)</h3>
    <ul>
      <li>Node.js 20 LTS (or higher) + npm 10.</li>
      <li>Optionally: native build tools for <code>sqlite3</code> (prebuilt binaries ship for most hosts, so this is usually not required).</li>
      <li>For Windows builds: Windows machine or Wine/electron-builder cross-setup; for Linux: Debian or AppImage host.</li>
    </ul>

    <h3>11.2 Commands</h3>
    <table class="tbl-small">
      <thead><tr><th>Action</th><th>Command</th><th>Output</th></tr></thead>
      <tbody>
        <tr><td>Install dependencies</td><td><code>npm install</code></td><td><code>node_modules/</code> (gitignored).</td></tr>
        <tr><td>Run app locally (teacher panel + server)</td><td><code>npm start</code> (internally: <code>electron . --no-sandbox</code>)</td><td>Electron window + Browser console DevTools accessible by default.</td></tr>
        <tr><td>Run with auto-restart on code change</td><td><code>npm run start:dev</code> (nodemon)</td><td>Watch mode; auto-reloads main process.</td></tr>
        <tr><td>Build Windows installer + portable EXE</td><td><code>npm run build:win</code></td><td><code>dist/Quiz Master-1.0.1-setup.exe</code>, <code>*-portable.exe</code>. Uses [assets/icon.ico](file:///home/najim/Documents/Quizz_APP_PIG/assets/icon.ico).</td></tr>
        <tr><td>Build Linux deb + AppImage</td><td><code>npm run build:linux</code></td><td><code>dist/Quiz Master-1.0.1.AppImage</code>, <code>*.deb</code>. Uses [assets/icon.png](file:///home/najim/Documents/Quizz_APP_PIG/assets/icon.png).</td></tr>
      </tbody>
    </table>

    <h3>11.3 Package Layout &amp; Icons</h3>
    <ul>
      <li><b>Windows icon pipeline</b>: SVG source → 10 sizes PNG → node-packaged ICO (<code>scripts/build-ico.js</code>). Installer, taskbar, desktop shortcut, jump-list, control-panel app icon — all 1 file <code>assets/icon.ico</code>.</li>
      <li><b>Linux icon pipeline</b>: SVG → 512×512 PNG. electron-builder auto-generates 16/24/32/48/64/128/256/512 variants for <code>.desktop</code> files, AppImage desktop integration, and DEB <code>/usr/share/icons/hicolor/*/apps</code>.</li>
      <li><b>Reproducible rebuild</b> (after editing logo.svg): run the loop + node build-ico command documented in the commit notes at commit <code>7abeaf7</code>.</li>
    </ul>

    <h3>11.4 Environment Variables (<code>.env.example</code>)</h3>
<pre>
# API keys — OPTIONAL. If you set these, they become the FALLBACK for when
# the Settings modal fields are empty. The runtime JSON overrides them on save.
OPENAI_API_KEY=your_openai_key_here
GOOGLE_API_KEY=your_gemini_key_here

# AI defaults (optional; override if a Settings value is blank)
AI_PROVIDER=            # empty = Auto; set explicitly to "openai" or "gemini" if required
OPENAI_MODEL=gpt-4.1-mini
GEMINI_MODEL=gemini-3.5-flash
AI_TEMPERATURE=0.6
AI_MAX_TOKENS=1400

# Server port when started (students use LAN-IP plus this port)
PORT=3000
</pre>
    <p>⚠️ Real <code>.env</code> and <code>ai-settings.json</code> are <b>both gitignored</b> — never commit API keys. GitHub contains only the placeholder .env.example.</p>

    <h2>12. Sprint Changelog (v1.0.0 → v1.0.1, shipped on branch <code>main@7abeaf7</code>)</h2>
    <table class="tbl-small">
      <thead><tr><th>Area</th><th>Before</th><th>After</th><th>Rationale</th></tr></thead>
      <tbody>
        <tr><td>Student Mobile Images</td><td>Inline fixed width + height 300px — horizontal overflow &amp; cutoff on 360px Android.</td><td>Dedicated <code>.question-image</code> class with <code>max-width:100%</code> + 50/45/40vh breakpoints; custom dims applied as <code>max-</code> caps.</td><td>Actual student bug report in the lab.</td></tr>
        <tr><td>AI Trigger Placement</td><td>Floating bottom-right FAB — overlapped long question forms on scroll.</td><td>Pinned pill button <b>✨ AI Tools</b> in the toolbar, far right of "Create New Quiz" header.</td><td>Predictable, non-overlapping, reusable for future AI actions ("Summarize Results").</td></tr>
        <tr><td>AI Config UX</td><td>Edit a <code>.env</code> file, restart Electron to change key/model/temp.</td><td>⚙️ gear + full glass settings modal inside AI overlay; instant runtime persistence via IPC.</td><td>Non-developer teachers can't edit dotfiles.</td></tr>
        <tr><td>AI Response</td><td>"Generate &amp; Fill" one-shot (risky — bad output overwrote form).</td><td>Split into two explicit steps: Generate (preview) / Fill Questions (user approves).</td><td>Safe AI UX pattern.</td></tr>
        <tr><td>Icons</td><td>Generic placeholder (huge 187 KB ico, incorrect sRGB).</td><td>Hand-selected Lucide "Layers" SVG → 10 sRGB PNG-in-ICO (26 KB) + 512×512 PNG for Linux.</td><td>Professional appearance for submission + branding.</td></tr>
        <tr><td>Secrets hygiene</td><td>Only basic ignore rules.</td><td>Hardened <code>.gitignore</code> (blocks <code>.env*</code>, <code>ai-settings.json</code>, <code>node_modules/</code>, dist/, sqlite, backups, IDE/OS cruft). Addressed <code>.env.example</code>.</td><td>Required for public GitHub push.</td></tr>
      </tbody>
    </table>

    <h2>13. Future Roadmap</h2>
    <div class="three-col">
      <div class="feat-card">
        <h4>📊 Analytics Dashboard</h4>
        <p>Per-question difficulty bars, grade distribution histogram, per-class trend. Reuses the ✨ AI Tools toolbar pill → "Summarize this session's results with LLM" action.</p>
      </div>
      <div class="feat-card">
        <h4>📥 Quiz Import/Export</h4>
        <p>Import teacher's existing CSV / JSON question banks into <code>quizzes + questions</code> tables without retyping. Option to export a single quiz to JSON for share-with-colleague.</p>
      </div>
      <div class="feat-card">
        <h4>📱 QR Join Code</h4>
        <p>Live Session view auto-generates <code>qr://http://LAN-IP/join/ABCD</code> so students point camera, no typing. Biggest UX win for large lab rooms.</p>
      </div>
      <div class="feat-card">
        <h4>🧮 More Question Types</h4>
        <p>Numeric, True/False, multi-select ("choose all that apply"), short-answer regex matching. DB schema already forward-compatible with a <code>type</code> column added to <code>questions</code>.</p>
      </div>
      <div class="feat-card">
        <h4>🔐 End-to-End LAN Security</h4>
        <p>Optional per-session join password; HTTPS via self-signed cert on the Express server. Currently fine for lab LAN, this upgrades it for dorm Wi-Fi use.</p>
      </div>
      <div class="feat-card">
        <h4>💾 Per-Question Attachment Types</h4>
        <p>PDF multi-page preview, audio clips, LaTeX math (KaTeX render). Already supported for AI attachments; only the student renderer is missing.</p>
      </div>
    </div>

    <div class="pagefoot">
      <span>Quiz Master — App Dev Lab Submission</span>
      <span>Page 10 / 10</span>
    </div>
  </div>
</section>

</body>
</html>
