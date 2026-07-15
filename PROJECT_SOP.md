# PROJECT SOP — Saraswati Mandir, Nagpur Website (assistant reference, not a public page)

READ THIS FILE FIRST at the start of any chat about this website. It is the single source of truth for the project. Keep it up to date after meaningful changes. (A copy of this SOP also lives in the local folder B:\saraswati-mandir-website.)

## ⚠️ TOP GUARDRAIL — PREVIEW FIRST, PUBLISH ONLY ON PASSWORD "BUILD"
THIS OVERRIDES EVERYTHING ELSE. Before making ANY actual change to the website:
1. Prepare the change and DISPLAY A PREVIEW in the chat — show the exact before → after for BOTH the mr and en versions, and name the file(s) affected.
2. DO NOT publish or commit anything to the repo / live site yet.
3. WAIT for the maintainer to reply with the password: BUILD.
4. Only AFTER receiving "BUILD" do you commit to main. No commits, pushes, or writes to the live repo before that.
If in doubt, preview and wait. This is the single most important rule.

## 0. MANDATE (what the assistant is here to do)
The main task is to EDIT THIS WEBSITE ON THE MAINTAINER'S COMMAND.
- The maintainer (Dr. Vibhawari Dani) describes a change; the assistant PREPARES it, PREVIEWS it in chat, and commits to `main` ONLY after the password "BUILD" (see TOP GUARDRAIL).
- Setup is DONE: the GitHub connector is installed with read+write on this repo, so edits commit straight to `main` through the connector.
- Default behaviour: read the relevant file, prepare the edit (BOTH language versions — see section 4), show a PREVIEW in chat, WAIT for "BUILD", then commit to `main` and note the live site updates in ~1-2 minutes.
- Do not re-litigate access setup; it works. Only revisit it if a write returns 403 (see section 2 note).

## 0.1 INSTRUCTION SOURCE — the "speak app" (voice transcripts)
Edit instructions are usually given by VOICE and reach the assistant as transcripts in the recordings/speak-app connector (list_recordings / get_recording).
- HOW TO PICK THE RIGHT RECORDING: the maintainer will GIVE THE RECORDING ID (the "code"), or its name/date, usually with a "fetch" command (e.g. "fetch <id>", "fetch 2", "fetch latest website"). If the maintainer says "list", call list_recordings and show a short numbered list so they can pick. Do NOT guess or auto-pick the newest — the speak app holds many unrelated recordings (medical notes, etc.). (No picker artifact is used.)
- Fetch that recording's `renderedText`, treat it as the instruction, and prepare the described change (then follow the TOP GUARDRAIL).
- Because transcription can mishear names/terms, confirm the understood instruction (proper nouns, Marathi/English text, photo placement) as part of the preview.
- Transcripts may span multiple recordings (one may continue with "Additionally…"); ask if an instruction seems cut off.

## 0.2 CORRECTIONS LOG — learn from past mistakes (LOCAL FILE, not in this repo)
CORRECTIONS.md is kept in the LOCAL folder B:\saraswati-mandir-website — the maintainer wants it local, NOT in the GitHub repo.
- At the start of every chat, ensure the local folder is connected, then READ CORRECTIONS.md and honour every rule in it.
- Whenever the maintainer points out a mistake or gives a correction, APPEND a new entry (newest at top) to the LOCAL CORRECTIONS.md and save it.
- Before any edit, scan CORRECTIONS.md for a rule that applies.

## 1. What this project is
Bilingual (Marathi / English) static website for Saraswati Mandir, Nagpur. Plain HTML, CSS, JavaScript, no build step.
- Maintainer: Dr. Vibhawari Dani (drvsdani@mahantrust.org)
- GitHub account: drvsdani-ctrl
- Repository: drvsdani-ctrl/saraswati-mandir-website (public)
- Local working folder: B:\saraswati-mandir-website
- Live site: https://saraswatimandirnagpur.org (custom domain via CNAME)
- Also at: https://drvsdani-ctrl.github.io/saraswati-mandir-website/
- Hosting: GitHub Pages, branch main, folder / (root)

## 2. How to work on this site
1. Edits are committed to GitHub via the connector (the app is INSTALLED with read+write). The local folder holds a working copy plus the local CORRECTIONS.md and a copy of this SOP.
2. Edit method: PREVIEW in chat first; commit to `main` ONLY after the maintainer sends the password "BUILD" (see TOP GUARDRAIL). Changes go live ~1-2 minutes after commit.
3. Use clear commit messages.
4. Fetch the current file fresh before editing (its SHA is required to update it on GitHub).
5. Verify after editing, checking both language versions. When a commit requires sending the WHOLE file, change only the target text and check for stray/control characters before and after (diff against the clean local copy).
Note: if a write returns 403 "Resource not accessible by integration," the app was uninstalled — reinstall it at github.com/apps/claude-github-mcp-connector, click Install, select this repo (ignore the "state: Field required" redirect error; the install still registers).

## 3. Site structure (pages)
- index.html — Saraswati Mandir (home, links to all activities)
- school.html — Kalyan Mook Badhir Vidyalaya and Junior College
- library.html — Late Ms. Vidyawati Joglekar Library
- reading-room.html — Reading Room (Abhyasika)
- hostel.html — Working Women's Hostel
- badminton.html — Capt. Manohar Vaidya Badminton Training Centre
- khandoba.html — Khandoba Hanuman Devasthan Balwadi
Folders: css/ (styles), js/ (scripts incl. main.js), images/ (photos). Other: README.md, CNAME, .nojekyll, PROJECT_SOP.md. (CORRECTIONS.md is LOCAL only.)

## 4. Content conventions (read before editing text)
- Bilingual, always in pairs. Every visible text appears twice: once in an element with class "mr" (Marathi) and once with class "en" (English). Edit BOTH versions so the languages stay in sync.
- Language toggle: header buttons switch the whole page; the choice is remembered in the browser. Default language is Marathi. To make English default, change 'mr' to 'en' in the two places it appears in js/main.js.
- Adding a photo: copy the .jpg into images/ and add one line in the page's gallery section following the existing pattern. Place each photo near its matching activity (main-building photos on the home page, school photos on school.html, etc.).

## 5. Known pending items (add when material is available)
- DONE 2026-07-15: Charity Commissioner registration number and date added to the home-page footer — Reg. No. F-259(N), dated 16.04.1962 (both mr/en).
- Exact years of the school's grant milestones (school.html).
- A photograph of the Khandoba Balwadi (khandoba.html).

## 6. Start-of-chat checklist
1. Confirm repo drvsdani-ctrl/saraswati-mandir-website; connect local folder B:\saraswati-mandir-website.
2. Read this PROJECT_SOP.md, then read the local CORRECTIONS.md.
3. Mandate = edit the website on the maintainer's command; PREVIEW in chat, then commit to main ONLY after password "BUILD".
4. Instructions come by voice via the speak-app connector; the maintainer fetches a recording by id/name/date.
5. For any text change, update BOTH mr and en versions.
6. After committing, note the live site updates in ~1-2 minutes.
7. If the maintainer gives a correction, append it to the local CORRECTIONS.md.

## 7. Change log
- 2026-07-15: SOP created; connector installed with write access; commit-to-main confirmed; speak-app transcription workflow added; CORRECTIONS.md kept as a LOCAL file per maintainer (removed from repo).
- 2026-07-15: Added Charity Commissioner registration number F-259(N) and date 16.04.1962 to the home-page footer (both languages).
- 2026-07-15: Added TOP GUARDRAIL — always PREVIEW in chat before any change; do NOT publish/commit until the maintainer gives the password "BUILD".

Last updated: 2026-07-15.
