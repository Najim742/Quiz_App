 Quiz Master — Project Documentation (App Dev Lab)  /\* ---------- A4 print base ---------- \*/ :root { --ink: #0b0f1a; --muted: #4a506b; --line: #c9cde0; --accent: #2563eb; --accent-dark: #1d4ed8; --surface: #f4f6fc; --code-bg: #eef1ff; --table-head: #2563eb; } @page { size: A4; margin: 16mm 14mm 18mm 14mm; } html, body { margin: 0; padding: 0; background: #e9ecf7; color: var(--ink); font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-size: 11.5pt; line-height: 1.5; } .sheet { width: 210mm; min-height: 297mm; padding: 18mm 16mm 18mm 16mm; margin: 14mm auto; background: #fff; box-shadow: 0 8px 36px rgba(20, 30, 80, 0.14); page-break-after: always; box-sizing: border-box; } .sheet:last-child { page-break-after: auto; } /\* ---------- Typography ---------- \*/ h1, h2, h3, h4 { color: var(--accent-dark); font-weight: 700; letter-spacing: -0.01em; } h1 { font-size: 26pt; margin: 0 0 4mm; text-align: center; line-height: 1.15;} h2 { font-size: 16pt; margin: 0 0 4mm; padding: 1.6mm 4mm; background: linear-gradient(90deg, rgba(37,99,235,0.12), rgba(37,99,235,0)); border-left: 3px solid var(--accent); border-radius: 2mm; } h3 { font-size: 12.5pt; margin: 4mm 0 2mm; } h4 { font-size: 11.5pt; margin: 2.5mm 0 1.5mm; } p { margin: 0 0 2.5mm; } ul, ol { margin: 0 0 3mm; padding-left: 6mm; } li { margin: 0.8mm 0; } strong { color: #0c1538; } code { font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace; font-size: 10.2pt; background: var(--code-bg); color: #1e3a8a; padding: 0.4mm 1.2mm; border-radius: 1.2mm; border: 1px solid #e0e4fb; } pre { font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace; font-size: 9.5pt; background: var(--code-bg); border: 1px solid #e0e4fb; border-radius: 2.5mm; padding: 3mm 4mm; line-height: 1.45; white-space: pre-wrap; word-break: break-word; margin: 2mm 0 3.5mm; } pre code { background: transparent; border: 0; padding: 0; color: inherit; } /\* ---------- Tables ---------- \*/ table { width: 100%; border-collapse: collapse; margin: 2.5mm 0 4mm; font-size: 10.8pt; } th, td { border: 1px solid var(--line); padding: 1.6mm 2.4mm; vertical-align: top; text-align: left; } th { background: var(--table-head); color: #fff; font-weight: 600; letter-spacing: 0.02em; font-size: 10.2pt; } tr:nth-child(even) td { background: #fafbff; } .tbl-small td, .tbl-small th { font-size: 9.8pt; padding: 1.2mm 2mm; } /\* ---------- Title page ---------- \*/ .titlepage { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 6mm; } .titlepage .brand { width: 36mm; height: 36mm; margin: 0 auto 4mm; border-radius: 8mm; background: linear-gradient(135deg, #2563eb, #4f46e5); box-shadow: 0 8px 22px rgba(37,99,235,0.35); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 10pt; font-weight: 700; position: relative; } .titlepage .brand::before { content: ""; width: 22mm; height: 22mm; background: radial-gradient(circle at 50% 50%, transparent 40%, #ffffffaa 41%, transparent 43%), linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0)); position: absolute; -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5'/><path d='m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5'/></svg>") center/contain no-repeat; mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z'/><path d='m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5'/><path d='m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5'/></svg>") center/contain no-repeat; } .titlepage h1 { font-size: 32pt; background: linear-gradient(135deg, #1e3a8a, #4f46e5); -webkit-background-clip: text; background-clip: text; color: transparent; } .titlepage .subtitle { font-size: 13pt; color: var(--muted); max-width: 140mm; margin: -2mm auto 4mm; } .meta-grid { display: grid; grid-template-columns: 40mm 1fr; gap: 1.8mm 4mm; margin-top: 6mm; width: 150mm; text-align: left; border-top: 1px solid var(--line); padding-top: 5mm; } .meta-grid .k { color: var(--muted); font-size: 10.5pt; font-weight: 600; } .meta-grid .v { font-weight: 600; color: var(--ink); font-size: 11pt; } .course-chip { display: inline-block; margin-top: 8mm; padding: 1.2mm 5mm; border-radius: 99mm; background: #eef2ff; color: var(--accent-dark); font-weight: 700; font-size: 10.5pt; letter-spacing: 0.06em; text-transform: uppercase; border: 1px solid #d8defc; } /\* ---------- Page header/footer for content pages ---------- \*/ .pagehead { display: flex; justify-content: space-between; align-items: center; padding-bottom: 2.5mm; margin-bottom: 4mm; border-bottom: 1px solid var(--line); font-size: 9.8pt; color: var(--muted); } .pagehead .brandmark { color: var(--accent-dark); font-weight: 700; letter-spacing: 0.04em; } .pagefoot { margin-top: auto; padding-top: 2.5mm; margin-top: 5mm; border-top: 1px solid var(--line); font-size: 9pt; color: var(--muted); display: flex; justify-content: space-between; } .content { display: flex; flex-direction: column; min-height: 261mm; } /\* ---------- Badges / chips ---------- \*/ .chips { display: flex; flex-wrap: wrap; gap: 1.5mm; margin: 1mm 0 3mm; } .chip { display: inline-block; padding: 0.8mm 2.4mm; border-radius: 99mm; background: #eef2ff; color: var(--accent-dark); font-size: 9.5pt; font-weight: 600; border: 1px solid #dde3fe; } .chip.ok { background: #ecfdf5; color: #047857; border-color: #bfead3; } .chip.warn { background: #fff7ed; color: #b45309; border-color: #f6d6b0; } .chip.purple { background: #f5f3ff; color: #6d28d9; border-color: #ddd6fe; } /\* ---------- 2-col grid ---------- \*/ .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; } .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; } .feat-card { background: var(--surface); border: 1px solid #e2e6f7; border-radius: 3mm; padding: 3mm 3.5mm; } .feat-card h4 { margin-top: 0; color: var(--accent-dark); } /\* ---------- Dir tree ---------- \*/ .tree { font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace; font-size: 9.6pt; background: #f7f8ff; border: 1px solid #e0e4fb; border-radius: 3mm; padding: 3mm 4mm; line-height: 1.6; margin: 2mm 0 4mm; white-space: pre; overflow: hidden; } .tree .f { color: #0f172a; } .tree .d { color: var(--accent-dark); font-weight: 700; } /\* ---------- Screen only hint ---------- \*/ .screen-only { background: #fffbeb; border: 1px dashed #f5c96b; border-radius: 3mm; padding: 3mm 4mm; margin: 0 auto 5mm; color: #92400e; font-size: 10pt; max-width: 210mm; } .screen-only b { color: #78350f; } /\* ---------- Print tweaks ---------- \*/ @media print { body { background: #fff; } .sheet { margin: 0; box-shadow: none; width: 100%; } .screen-only { display: none; } a { color: inherit; text-decoration: none; } }

**How to print this handout:** open in Chrome → press **Ctrl / ⌘ + P** → Destination: **Save as PDF** (or your lab printer) → Paper size: **A4** → Margins: **Default** → Scale: **Default** → Print. Each sheet below is already A4-sized with correct page breaks.

Quiz Master
===========

A LAN-based quiz system for classroom formative assessment. Teachers build quizzes with AI assistance; students join from any phone or laptop browser on the same Wi-Fi — live timed session, instant auto-grading and per-answer review.

Electron 43 · Desktop App Node.js 20 · Express SQLite 3 Persistence OpenAI / Gemini APIs WebSocket Realtime Mobile-first Web Client

Course

Application Development Laboratory

Submitted By

Najim

Student Email

najimchowdhury742@gmail.com

App Version

v1.0.1 (commit 7abeaf7 on main)

GitHub Repo

github.com/Najim742/Quiz\_App

Submission Date

August 2026

Teacher Handout · Full Project Documentation

QUIZ MASTER · DOCUMENTATION Table of Contents & Overview

Table of Contents
-----------------

1.  Project Overview — purpose, goals, target users
2.  Key Features — teacher panel, student panel, AI tools, live session
3.  Technology Stack — libraries, versions, rationale for each choice
4.  Project Structure — folder tree + purpose of each file
5.  System Architecture — 4-tier diagram, data & control flow
6.  Database Design — 5 SQLite tables with column definitions + constraints
7.  REST & WebSocket API — endpoints, message contracts
8.  Electron IPC Contract — every inter-process channel (db:\*, ai:\*, server:\*)
9.  User Manual (Teacher + Student) — click-by-click workflows
10.  AI Subsystem — settings, response schema, SVG & file attachments
11.  Build & Installation — run, build installers, icons
12.  Sprint Changelog + Future Roadmap
13.  Appendices — env example, default icon, .gitignore

1\. Project Overview
--------------------

### 1.1 Problem Statement

Running a short formative quiz inside a university computer lab typically requires three separate tools (question authoring, distribution, and grading), plus internet access for every student, which is often slow or unavailable. Paper quizzes take hours to grade and lose the _"instant feedback"_ value that formative assessment needs.

### 1.2 Proposed Solution — Quiz Master

A single cross-platform desktop application that the teacher launches on their lab PC:

*   **Authoring**: a glassmorphism UI for manual or AI-assisted MCQ creation, per-question images/PDF attachments, full library with soft-delete Recycle Bin.
*   **Distribution**: one click spins up an Express + WebSocket _LAN-only server_ bound to `0.0.0.0`; students join from any browser on the same Wi-Fi by typing a LAN URL & short join code.
*   **Live session**: shared countdown timer broadcast over WS, real-time connected-students list, automatic time-out submission.
*   **Grading**: pure server-side SQLite auto-grading — zero teacher work per submission.
*   **Feedback**: per-student answer review screen with correct vs. chosen options and responsive inline diagrams.

### 1.3 Target Users

#### 👩‍🏫 Lab Instructor

Runs the Electron app; creates quizzes; starts/stops LAN sessions; exports submission CSV; reviews history.

#### 🎓 University Student

Joins from personal phone/laptop over lab Wi-Fi (no install, no account, no internet).

#### 🏛 University Department

Runs self-hosted on existing lab PCs; all data stays local on the teacher's machine (GDPR / campus-policy friendly).

Quiz Master — App Dev Lab Submission Page 2 / 10

QUIZ MASTER · DOCUMENTATION Key Features · Technology Stack

2\. Key Features
----------------

### 2.1 Teacher Panel (Electron Desktop)

*   7 sidebar views: Dashboard, Create Quiz, Live Session, History, Students, Recycle Bin, Connected Students.
*   Full CRUD for MCQ bank: 4 options (A/B/C/D), per-question image with custom max-width/height, soft-delete + restore.
*   Student roster manager: bulk create with normalized registration number, grouping by department / batch / session / semester.
*   ✨ AI Tools (top toolbar, pinned pill button): chat-based assistant that previews JSON questions then fills the form on approval.
*   ⚙️ AI Settings modal (no restart): provider (Auto / OpenAI / Gemini), API keys, model text, temperature slider, max tokens.
*   Per-session filters: restrict who can join by dept, session year, semester, batch.
*   Live WebSocket dashboard with count-down timer + connected list + per-submission notifications.
*   Session history, results modal, one-click CSV export of submissions.

### 2.2 Student Panel (Any Browser, LAN)

*   Zero install: any browser on Android/iOS/macOS/Windows/Linux — same URL on the lab Wi-Fi.
*   Login via registration number + department + session year (preloaded from teacher's roster).
*   Shared server-side quiz start time & duration with mini floating sticky timer.
*   Mobile-first responsive MCQ view; question images capped with `.question-image` (max-width 100%, max-height 50vh → 40vh at 480px breakpoint).
*   Manual "Submit" or auto submit at timeout (WS message `teacher:quizStop`).
*   Instant score page (correct / total, percentage, completion status).
*   Full per-answer review screen (green correct badge, red wrong-answer badge, reusable image components).

### 2.3 Cross-cutting

*   Soft-delete architecture for quizzes, students, and sessions — Recycle Bin view with Restore / Permanent Delete.
*   Migrate-on-boot DB schema with existence checks for every added column (safe for upgrades).
*   Glassmorphism neutral-gray / blue-purple aesthetic shared across both panels.
*   Hardened secrets management: `.env` + runtime `ai-settings.json` both gitignored.

3\. Technology Stack
--------------------

Layer

Library / Tool

Version

Purpose & Rationale

Desktop Shell

Electron

43.x

Single codebase for Windows / macOS / Linux installers; IPC separation between UI (renderer) and DB/AI/Server (main).

Runtime

Node.js

20 LTS

Async-first stdlib, CommonJS module system, NPM ecosystem.

LAN Server

Express

5.x

HTTP routes for student REST API; serves static student client from `/src/static`.

Realtime

ws (WebSocket)

8.x

Server ↔ teacher + server ↔ students: quiz start/stop/timer sync, per-submission push.

Database

better-sqlite3-style driver (`sqlite3`)

6.x

Zero-config embedded SQL DB — single file in userData; no server install required in lab.

CORS

`cors`

2.x

Permissive for the LAN-only Express server (students connect from any local device).

CSV Export

`csv-writer`

1.6.x

Well-typed CSV writer for "Export Session Results" button.

Build / Pack

electron-builder

(devDependency)

Produces Windows NSIS/Portable + Linux AppImage/deb.

Rendering

Vanilla JS (no framework)

—

Intentional: App Dev course learning outcome — full understanding of DOM/fetch/WS rather than React abstraction.

Styling

Plain CSS3 + glassmorphism

—

Custom tokens, backdrop-blur, 768/480 px mobile breakpoints, no runtime CSS lib.

AI Providers

OpenAI, Google Gemini

REST

Pluggable via settings; provider can be forced to OpenAI-only / Gemini-only / Auto by key presence.

Quiz Master — App Dev Lab Submission Page 3 / 10

QUIZ MASTER · DOCUMENTATION Project Structure · System Architecture

4\. Project Structure
---------------------

Quizz\_APP\_PIG/ ├── assets/ │ ├── build/ Per-size PNG intermediates (16→512 px) │ ├── icon.ico ← Windows installer icon (10 PNG-in-ICO) │ ├── icon.png ← Linux icon target (512×512) │ └── logo.svg ← Canonical SVG logo (Lucide Layers, #2563EB) ├── scripts/ │ └── build-ico.js Node PNG→ICO packer (10 sRGB entries) ├── slides/ │ └── index.html Lab-presentation slide deck (9 slides) ├── src/ │ ├── main/ │ │ └── main.js Electron boot, BrowserWindow, 60+ ipcMain handlers │ ├── renderer/ TEACHER PANEL (Chromium renderer) │ │ ├── index.html 7 sidebar views + 2 modals + AI overlay │ │ ├── renderer.js View switches, forms, AI chat, settings modal │ │ └── style.css Glassmorphism CSS (chatbot-fab, AI overlay, settings) │ ├── server/ │ │ ├── db.js SQLite schema (5 tables), soft-delete CRUD (dbApi) │ │ ├── quizAssistant.js AI runtime settings, LLM calls, SVG/attachments │ │ └── server.js Express REST + WebSocket (startServer/stopServer) │ └── static/ STUDENT PANEL (served by Express) │ ├── index.html Join / Login / Quiz / Result / Answer-Review views │ ├── student.js Login, WS connect, timer, renderQuestions, submit │ └── style.css Mobile-first responsive styles, .question-image ├── node\_modules/ (gitignored) ├── .env.example Placeholder API keys / port (committed) ├── .gitignore Blocks .env, ai-settings.json, sqlite, dist, node\_modules ├── package.json Dependencies + electron-builder win/linux targets └── README.md (if present — short run instructions)

5\. System Architecture
-----------------------

### 5.1 Four-Tier Deployment Diagram

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
│  │  · REST /api/\*\*                │◄─┼─►· CRUD via dbApi (Promises) │ │
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

### 5.2 Flow of a Typical 5-Minute Lab Quiz

1.  **Teacher opens Quiz Master** → `app.on('ready')` creates `BrowserWindow`, loads `quizAssistant.loadAISettings()` from userData, inits SQLite schema via `initDb()`.
2.  **Create Quiz** view → manual questions OR `ipcRenderer.invoke('ai:generateQuizQuestions', prompt)` → `generateQuizAssistantResponse()` → JSON preview → "Fill Questions".
3.  **Create Session** → short code (ABCD) saved in `sessions` table; teacher clicks **Start Server** (ipc `toggle-server` → `startServer(port)`).
4.  **Students** visit `http://LAN-IP:port/join/ABCD` → Express serves static `src/static/index.html`; `POST /api/students/login` validates their registration number against `students` table.
5.  Teacher presses **Start Quiz** → WS broadcasts `server:startQuiz` with startTime & duration to all connected students.
6.  Each student answers, submits or auto-times-out → WS `student:submit` → server saves `submissions` row with JSON answers, computes `score`.
7.  Result page → Review Answers screen → session ends. Teacher can **Export CSV** (`ipc: export-csv` → `createObjectCsvWriter`) or browse History view.

Quiz Master — App Dev Lab Submission Page 4 / 10

QUIZ MASTER · DOCUMENTATION Database Design (SQLite 3)

6\. Database Design
-------------------

Single embedded SQLite database file stored inside Electron's `app.getPath('userData')/quizmaster.db`. Schema is applied idempotently on every boot with `CREATE TABLE IF NOT EXISTS` followed by per-column existence checks — upgrades are drop-in safe for future versions.

### 6.1 Table 1 — `students` (Roster)

Column

Type

Constraints

Notes

id

INTEGER

PRIMARY KEY AUTOINCREMENT

Internal row id.

registration\_number

TEXT

NOT NULL UNIQUE, normalized on insert

Lookup key for student login. Normalized: lowercase, stripped of dashes and spaces.

roll\_number

TEXT

NOT NULL

Class roll number (displayed on results).

full\_name

TEXT

NOT NULL

Full student name.

semester

TEXT

NOT NULL

e.g. "4th", "6th".

session\_year

TEXT

NOT NULL

e.g. "2024-2025". Used in student login.

department

TEXT

NOT NULL

e.g. "CSE", "EEE". Used in login & session filters.

batch

TEXT

NOT NULL

e.g. "2022".

verified

INTEGER

DEFAULT 1

Always 1 in current implementation; reserved for manual approval future flow.

deleted

INTEGER

DEFAULT 0

Soft-delete flag. Recycle Bin view + Restore.

### 6.2 Table 2 — `quizzes` (Question Bank)

Column

Type

Constraints

Notes

id

INTEGER

PRIMARY KEY AUTOINCREMENT

Foreign key target of questions & sessions.

title

TEXT

NOT NULL

Displayed on library and student start-screen.

duration

INTEGER

DEFAULT 60

Quiz duration in **minutes**; converted to seconds when broadcast over WS.

semester

TEXT

—

Optional grouping tag.

session

TEXT

—

Optional session-year tag.

deleted

INTEGER

DEFAULT 0

Soft-delete flag; Restore / Permanent Delete in Recycle Bin.

### 6.3 Table 3 — `questions` (Per-Quiz MCQ Questions)

Column

Type

Constraints

Notes

id

INTEGER

PRIMARY KEY AUTOINCREMENT

Question id.

quiz\_id

INTEGER

FK → quizzes(id) ON DELETE CASCADE

Deleting a quiz deletes every row here automatically.

text

TEXT

NOT NULL

Question stem (may contain markup/text).

opt\_a / opt\_b / opt\_c / opt\_d

TEXT

NOT NULL each

Four MCQ distractors.

correct\_opt

TEXT

NOT NULL

Case-insensitive letter: `A` / `B` / `C` / `D`.

image

TEXT

NULLABLE

Inline Data URI (`data:image/png;base64,…`). Never stored on filesystem — fully portable with the DB.

image\_width

INTEGER

NULLABLE

Optional max-width cap (rendered as `max-width` CSS).

image\_height

INTEGER

NULLABLE

Optional max-height cap (rendered as `max-height` CSS).

Quiz Master — App Dev Lab Submission Page 5 / 10

QUIZ MASTER · DOCUMENTATION Database (ctd.) · REST API

### 6.4 Table 4 — `sessions` (Quiz Event Instances)

Each time the teacher picks a quiz and clicks "Create Session," one row is written with a short 4-char join code. Students provide this code on the Join page so the server knows which quiz they are taking.

Column

Type

Constraints

Notes

id

INTEGER

PRIMARY KEY AUTOINCREMENT

FK target of submissions.

code

TEXT

NOT NULL UNIQUE

Short case-insensitive join code (e.g. `A3F9`).

quiz\_id

INTEGER

FK → quizzes(id)

The quiz being administered.

status

TEXT

DEFAULT 'active'

`active` / `ended` / teacher's custom labels.

created\_at

DATETIME

DEFAULT CURRENT\_TIMESTAMP

Used for History view ordering.

show\_answers

INTEGER

DEFAULT 0

Teacher-controlled flag; when 1, Answer-Review screen is unlocked on the student client.

deleted

INTEGER

DEFAULT 0

Soft-delete flag.

filter\_department / \_session\_year / \_semester / \_batch

TEXT

Each NULLABLE

Optional attendance filters — server rejects login/join if student's record does not match.

### 6.5 Table 5 — `submissions` (Student Attempts)

Column

Type

Constraints

Notes

id

INTEGER

PRIMARY KEY AUTOINCREMENT

Attempt id.

session\_id

INTEGER

FK → sessions(id)

Session this attempt belongs to.

registration\_number

TEXT

—

Denormalized copy — CSV reporting without joins.

roll

TEXT

NOT NULL

Roll number (displayed on results screen).

name

TEXT

NOT NULL

Full name snapshot at submit time.

semester

TEXT

—

Denormalized grouping for CSV rows.

answers

TEXT

NOT NULL

Serialized JSON: `{"<qId>":"A","<qId2>":"C", …}`.

score

INTEGER

NOT NULL

Count of correct answers — computed server-side on every submit (never trust client).

timed\_out

BOOLEAN

DEFAULT 0

1 if auto-submitted by the server because duration expired.

7\. REST & WebSocket API
------------------------

### 7.1 Student-Facing REST API (Express — `server.js`)

Served from the LAN-only Express app at `http://<LAN-IP>:<port>/api/**`.

Method

Route

Request Body / Params

Response

Used By

GET

/join/:code

URL param `code`

Serves `static/index.html` (student SPA).

Student browser URL bar.

GET

/api/students/sessions

—

Unique `session_year[]` values for login dropdown.

student.js login form (populate).

GET

/api/students/departments

—

Unique `department[]` values.

student.js login form (populate).

POST

/api/students/login

`{registrationNumber, sessionYear, department}`

Student row on 200; 404 if not found.

student.js login.

GET

/api/quizzes

—

Array of quizzes (title, duration, id).

Teacher REST debug / extensibility.

POST

/api/quizzes

`{title, duration, semester}`

`{id, title, duration, semester}`.

HTTP quiz creation (same as IPC).

DELETE

/api/quizzes/:id

URL param id

`{success: true}`.

HTTP delete (soft).

GET

/api/quizzes/:id/questions

URL param quiz id

Array of questions (all four options + correct\_opt + image).

Student client (when quiz starts).

GET

/api/active-session

query: `?code=ABCD`

Active session object (quiz, filters, status) + student questions.

Join button in student.js.

POST

/api/submit

`{sessionId, studentId, name, roll, answers, timedOut}`

`{score, submissionId, totalQuestions}`.

Submit button / timeout.

GET

/api/sessions/:id/questions

URL param session id

Questions + correct answer key (only if `sessions.show_answers=1`).

View Answer-Review button.

Quiz Master — App Dev Lab Submission Page 6 / 10

QUIZ MASTER · DOCUMENTATION WebSocket Protocol · IPC Contract

### 7.2 WebSocket Protocol (`ws` library, same port as HTTP)

Two WS "roles" exist per connection: the Teacher UI (single client, registers with a `hello:teacher` message), and any number of connected Student browsers (registers as `hello:student`). All messages are plain JSON with a `{type, payload}` envelope.

Direction

type

payload shape

When sent

T→S

`hello:teacher`

—

Teacher Live-Session view WS connects. Server caches socket as `teacherWs`.

S→T

`hello:teacher`

—

Ack; server enables student-to-teacher push on this socket.

St→S

`hello:student`

`{sessionCode, studentId, name, roll, regNo}`

Student joins. Server adds to activeSession.connectedStudents.

S→T

`server:studentJoined`

Full updated connected-students list

Teacher UI live list re-renders.

T→S

`teacher:startQuiz`

`{startTime (ISO), durationSec}`

Teacher clicks "Start". Server broadcasts `server:startQuiz` to every student socket.

S→St

`server:startQuiz`

`{startTime, duration, questions[]}`

Student client starts timer, renders Questions view.

T→S

`teacher:quizStop`

—

Manual end-time or timer hits 0. Server auto-submits any still-connected students who have not submitted, then emits to each client.

S→St

`server:quizEnded`

`{ended: true}`

Client unlocks result screen.

St→S

`student:submit`

`{sessionId, studentId, roll, name, semester, answers{qId→opt}, timedOut}`

Student clicks "Submit Quiz" (or timeout).

S→St

`server:submitted`

`{score}`

Ack to submitter with score.

S→T

`server:submission`

Full submission row

Teacher Live view shows each attempt + score in real time.

8\. Electron IPC Contract (Main ⇄ Renderer)
-------------------------------------------

All UI-side calls flow through preload-less `ipcRenderer` in the renderer process. Because the renderer window loads `file://…/renderer/index.html` with default `nodeIntegration: false` / `contextIsolation: true` protected options, the IPC handlers are intentionally a small, clean surface — exactly one channel per operation. Below is every handler registered in \[main.js\](file:///home/najim/Documents/Quizz\_APP\_PIG/src/main/main.js).

### 8.1 Server Control

Channel

Arguments

Returns

Notes

`get-server-info`

—

`{lanUrls[], port, running}`

Teacher "Server Status" card.

`get-server-status`

—

`{running, url, code?}`

Polled/UI updates.

`toggle-server`

—

New state object.

Idempotent; toggles `startServer() / stopServer()`.

### 8.2 AI Layer

Channel

Arguments

Returns

Notes

`ai:generateQuizQuestions`

payload {prompt, attachments\[\]?, history\[\]?}

{assistantMessage, questions\[\], svgContent?}

quizAssistant.js handles provider selection, key lookup (env first, then runtime settings), requestOpenAI/requestGemini fallback.

`ai:getSettings`

—

Effective settings with defaults filled in.

Called every time Settings modal is opened.

`ai:saveSettings`

settings object

`{ok: true}`.

Writes userData/ai-settings.json; runtime cache updated. Effective NEXT request.

### 8.3 Database (Teachers + Quizzes)

Channel Prefix

\# of Ops

Representative Operations

`db:getQuizzes / getQuizById / createQuiz`

3

CRUD for quizzes table (soft delete).

`db:deleteQuiz / deleteQuizzes (bulk)`

2

Soft delete.

`db:addQuestion / updateQuestion / deleteQuestion / getQuestionsByQuiz`

4

Full CRUD for each question in a quiz (including image/data-URI columns).

`db:getAllStudents / createStudent / createStudents / deleteStudent / deleteStudentsByGroup`

5

Roster CRUD; bulk insert for CSV/typed lists; group delete.

`db:getUniqueSessionYears / Departments / Semesters / Batches / StudentGroups`

5

Login dropdown data sources (student panel) and filter groups.

Quiz Master — App Dev Lab Submission Page 7 / 10

QUIZ MASTER · DOCUMENTATION IPC (ctd.) · User Manual (Teacher)

### 8.4 Database (Sessions + Results + Recycle Bin)

Channel

Arguments

Returns / Behaviour

`db:createSession`

code, quizId, filterDept, filterSessionYear, filterSem, filterBatch

Writes sessions row; returns id+code.

`db:getSessionsHistory`

—

Non-deleted sessions list for History view.

`db:getSessionById`

sessionId

Session row + quiz title.

`db:toggleShowAnswers`

sessionId

Flips show\_answers 0↔1 (gates student answer-review).

`db:getSessionQuestionsAndAnswers`

sessionId

For Results modal: questions + each student submission's chosen vs correct.

`db:getSubmissionsBySession`

sessionId

Submission rows table (name, score, timed-out…).

`db:deleteSession / deleteSessions (bulk)`

sessionId(s)

Soft-delete (moves to Recycle Bin).

`db:getDeletedItems`

—

Combined list of deleted quizzes/sessions/students for Recycle Bin.

`db:restoreQuiz / restoreQuizzes / restoreStudent / restoreSession / restoreSessions`

id(s)

Flips deleted=0.

`db:permanentDeleteQuiz / Quizzes / Student / Session / Sessions`

id(s)

Real SQL DELETE — unrecoverable (confirm dialog in UI).

`export-csv`

sessionId

Opens native Save-file dialog, writes CSV via csv-writer to chosen path.

_Total IPC channels as of v1.0.1:_ **60+** (1 server-info group, 3 AI channels, 19 quiz+question channels, 15 student+groups channels, 10 session+submission channels, 13 recycle-bin operations, 1 export).

9\. User Manual
---------------

### 9.1 Teacher — Step-by-Step Workflow (click-by-click)

1.  **Install / Launch**: run the installer or `npm start`. The Electron window opens on the Dashboard view.
2.  **Step 1 — Import students** (once per semester). Open the **Students** sidebar:
    *   Add Single Student: fill Registration No / Roll / Name / Dept / Semester / Session / Batch.
    *   Or, bulk paste a list of students.
3.  **Step 2 — Create a quiz**. Open **Create Quiz** in the sidebar:
    *   Fill Title (e.g. "HTML Forms Quiz"), Duration (minutes), Semester, Session tags.
    *   Click **✨ AI Tools** (top-right pill in the toolbar — pinned, never moves on scroll). Optionally open ⚙️ Settings first (provider, API key, temp 0.8, max 2800 → Save).
    *   Type a prompt like "Generate 5 MCQs on HTML forms and input types, include one with a CSS label example". Chat replies with JSON. Click **Preview**, then **Fill Questions** — questions land in the form.
    *   Manually tweak wording or click **🖼 Attach** to add an image to Q1.
    *   Click **Save Quiz**. The quiz appears in the Dashboard Quiz Library.
4.  **Step 3 — Start a live session**. Go to **Live Session** or Quiz Library → Start:
    *   Pick your quiz. Optionally add filter by Department / Session / Semester / Batch so only matching students can join.
    *   Click **Create Session** — short join code appears.
    *   Click **Start Server**. Status changes to Running, with one or more LAN URLs (`http://192.168.x.x:PORT`).
    *   Write this URL and join code on the lab whiteboard. Tell students: "Open Chrome on your phone, type this URL, enter this code, log in with your reg number."
5.  **Step 4 — Run the quiz**. On **Live Session**:
    *   Watch the connected-students list populate in real time.
    *   When everyone is in, click **Start Quiz**. Countdown timer starts for you + every student simultaneously.
    *   Student answers arrive in real-time on your screen.
6.  **Step 5 — End & Review**. Timer hits zero (or click **End Quiz**). Go to History → pick session → Results modal → toggle Show Answers → click **Export CSV**.
7.  To permanently clean up: Recycle Bin view → select old quizzes/sessions → Restore or Permanent Delete.

Quiz Master — App Dev Lab Submission Page 8 / 10

QUIZ MASTER · DOCUMENTATION User Manual (Student) · AI Subsystem

### 9.2 Student — Step-by-Step Workflow

1.  **Join the lab Wi-Fi**. No internet or app install needed.
2.  Open Chrome / Safari / Edge on **any device** (Android, iPhone, laptop). Type the LAN URL the teacher wrote on the whiteboard into the address bar and press enter.
3.  Type the **4-char join code** (e.g. `X7K2`) into the Join Code screen and tap **Join Quiz**.
4.  **Log in** (appears only if teacher enforced roster):
    *   Pick **Department** and **Session Year** from dropdowns.
    *   Type your **Registration Number** exactly as submitted to the teacher.
    *   Tap **Login**. Your Name & Roll appear at the top-right if matched.
5.  **Wait for teacher** on the "Waiting for quiz to start…" screen. A sticky countdown banner animates in when the quiz begins.
6.  **Answer questions**:
    *   Select option A/B/C/D per card. Change your mind any time before submit.
    *   Scroll down — a small mini-floating timer follows you so you never lose track.
    *   Images resize automatically (even on small phones) to avoid cutoff or horizontal scrolling.
7.  **Submit**:
    *   Tap **Submit Quiz** when done — OR — if the countdown reaches 0:00, the app auto-submits whatever you've chosen so far.
    *   Your result page loads instantly: `3 / 5 correct · 60%`.
    *   Tap **Review Answers** (only if the teacher unlocked it) to see which correct answer you missed on each question, green vs. red badges, and the original diagram/question image in readable size.

10\. AI Subsystem
-----------------

### 10.1 Settings Modal (⚙️ gear inside ✨ AI Tools popup)

Field

Type

Default

Notes

AI Provider

Dropdown: Auto / OpenAI / Google Gemini

Auto

Auto = pick whichever key is present; force if you only have one provider.

OpenAI API Key

Password input

Fallback from `.env → OPENAI_API_KEY`

Saved in userData JSON, never in repo.

OpenAI Model

Text

`gpt-4.1-mini`

Override to any chat completions model id.

Google Gemini API Key

Password input

Fallback from `.env → GOOGLE_API_KEY`

Works for free-tier keys.

Google Gemini Model

Text

`gemini-3.5-flash`

Works for Flash / Pro ids.

Temperature

Range slider 0.0 to 2.0, live value badge

0.6

0 = factual/deterministic; 1 = varied; 2 = weird.

Max Tokens

Number input (clamped on save)

1400

Max output token budget. Use 2500+ for 8+ MCQs + SVG.

### 10.2 Storage & Persistence

*   **Runtime settings file**: `app.getPath('userData')/ai-settings.json`. Created on first "Save Settings" click. **Gitignored** by exact name AND by pattern in `.gitignore` (defense-in-depth).
*   **Layered lookup order per request**: 1) runtime settings, 2) `.env` if unset, 3) built-in defaults 0.6/1400/gpt-4.1-mini/gemini-3.5-flash.
*   **Instant**: Next AI chat request uses new settings — zero Electron restart.

### 10.3 Response Schema (used by renderer.js to build UI)

{
  "assistantMessage": string,    // prose reply the AI typed in the chat bubble
  "questions": \[                 // empty array if only chit-chat / math help
    {
      "text": string,            // question stem (required)
      "option\_a": string,        // 4 options, always present for MCQ
      "option\_b": string,
      "option\_c": string,
      "option\_d": string,
      "correct\_option": "A|B|C|D",
      "explanation": string?     // optional "why this is correct" line
    },
    …
  \],
  "svgContent": string?          // optional inline SVG markup (diagrams, charts)
}

### 10.4 Attachments & SVG Diagrams

*   **Attachments** (teacher drags into AI chat): PNG/JPEG, PDF, TXT, CSV, JSON up to 10 MB. Text extracted and appended to the LLM prompt so it can ask questions about uploaded handouts.
*   **SVG output**: when user asks for a diagram, LLM is instructed to emit raw SVG markup in `svgContent`. Renderer renders it inline with **Download SVG** + **Copy SVG** buttons. No raster (image-gen) API calls — SVG always printable/crisp at any size.
*   **No raster image API fallback** (environment unreliable — removed per prior sprint).

Quiz Master — App Dev Lab Submission Page 9 / 10

QUIZ MASTER · DOCUMENTATION Build & Installation · Changelog · Roadmap

11\. Build & Installation
-------------------------

### 11.1 Prerequisites (dev machine)

*   Node.js 20 LTS (or higher) + npm 10.
*   Optionally: native build tools for `sqlite3` (prebuilt binaries ship for most hosts, so this is usually not required).
*   For Windows builds: Windows machine or Wine/electron-builder cross-setup; for Linux: Debian or AppImage host.

### 11.2 Commands

Action

Command

Output

Install dependencies

`npm install`

`node_modules/` (gitignored).

Run app locally (teacher panel + server)

`npm start` (internally: `electron . --no-sandbox`)

Electron window + Browser console DevTools accessible by default.

Run with auto-restart on code change

`npm run start:dev` (nodemon)

Watch mode; auto-reloads main process.

Build Windows installer + portable EXE

`npm run build:win`

`dist/Quiz Master-1.0.1-setup.exe`, `*-portable.exe`. Uses \[assets/icon.ico\](file:///home/najim/Documents/Quizz\_APP\_PIG/assets/icon.ico).

Build Linux deb + AppImage

`npm run build:linux`

`dist/Quiz Master-1.0.1.AppImage`, `*.deb`. Uses \[assets/icon.png\](file:///home/najim/Documents/Quizz\_APP\_PIG/assets/icon.png).

### 11.3 Package Layout & Icons

*   **Windows icon pipeline**: SVG source → 10 sizes PNG → node-packaged ICO (`scripts/build-ico.js`). Installer, taskbar, desktop shortcut, jump-list, control-panel app icon — all 1 file `assets/icon.ico`.
*   **Linux icon pipeline**: SVG → 512×512 PNG. electron-builder auto-generates 16/24/32/48/64/128/256/512 variants for `.desktop` files, AppImage desktop integration, and DEB `/usr/share/icons/hicolor/*/apps`.
*   **Reproducible rebuild** (after editing logo.svg): run the loop + node build-ico command documented in the commit notes at commit `7abeaf7`.

### 11.4 Environment Variables (`.env.example`)

\# API keys — OPTIONAL. If you set these, they become the FALLBACK for when
# the Settings modal fields are empty. The runtime JSON overrides them on save.
OPENAI\_API\_KEY=your\_openai\_key\_here
GOOGLE\_API\_KEY=your\_gemini\_key\_here

# AI defaults (optional; override if a Settings value is blank)
AI\_PROVIDER=            # empty = Auto; set explicitly to "openai" or "gemini" if required
OPENAI\_MODEL=gpt-4.1-mini
GEMINI\_MODEL=gemini-3.5-flash
AI\_TEMPERATURE=0.6
AI\_MAX\_TOKENS=1400

# Server port when started (students use LAN-IP plus this port)
PORT=3000

⚠️ Real `.env` and `ai-settings.json` are **both gitignored** — never commit API keys. GitHub contains only the placeholder .env.example.

12\. Sprint Changelog (v1.0.0 → v1.0.1, shipped on branch `main@7abeaf7`)
-------------------------------------------------------------------------

Area

Before

After

Rationale

Student Mobile Images

Inline fixed width + height 300px — horizontal overflow & cutoff on 360px Android.

Dedicated `.question-image` class with `max-width:100%` + 50/45/40vh breakpoints; custom dims applied as `max-` caps.

Actual student bug report in the lab.

AI Trigger Placement

Floating bottom-right FAB — overlapped long question forms on scroll.

Pinned pill button **✨ AI Tools** in the toolbar, far right of "Create New Quiz" header.

Predictable, non-overlapping, reusable for future AI actions ("Summarize Results").

AI Config UX

Edit a `.env` file, restart Electron to change key/model/temp.

⚙️ gear + full glass settings modal inside AI overlay; instant runtime persistence via IPC.

Non-developer teachers can't edit dotfiles.

AI Response

"Generate & Fill" one-shot (risky — bad output overwrote form).

Split into two explicit steps: Generate (preview) / Fill Questions (user approves).

Safe AI UX pattern.

Icons

Generic placeholder (huge 187 KB ico, incorrect sRGB).

Hand-selected Lucide "Layers" SVG → 10 sRGB PNG-in-ICO (26 KB) + 512×512 PNG for Linux.

Professional appearance for submission + branding.

Secrets hygiene

Only basic ignore rules.

Hardened `.gitignore` (blocks `.env*`, `ai-settings.json`, `node_modules/`, dist/, sqlite, backups, IDE/OS cruft). Addressed `.env.example`.

Required for public GitHub push.

13\. Future Roadmap
-------------------

#### 📊 Analytics Dashboard

Per-question difficulty bars, grade distribution histogram, per-class trend. Reuses the ✨ AI Tools toolbar pill → "Summarize this session's results with LLM" action.

#### 📥 Quiz Import/Export

Import teacher's existing CSV / JSON question banks into `quizzes + questions` tables without retyping. Option to export a single quiz to JSON for share-with-colleague.

#### 📱 QR Join Code

Live Session view auto-generates `qr://http://LAN-IP/join/ABCD` so students point camera, no typing. Biggest UX win for large lab rooms.

#### 🧮 More Question Types

Numeric, True/False, multi-select ("choose all that apply"), short-answer regex matching. DB schema already forward-compatible with a `type` column added to `questions`.

#### 🔐 End-to-End LAN Security

Optional per-session join password; HTTPS via self-signed cert on the Express server. Currently fine for lab LAN, this upgrades it for dorm Wi-Fi use.

#### 💾 Per-Question Attachment Types

PDF multi-page preview, audio clips, LaTeX math (KaTeX render). Already supported for AI attachments; only the student renderer is missing.

Quiz Master — App Dev Lab Submission Page 10 / 10
