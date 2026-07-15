# PROJECT SOP — Saraswati Mandir, Nagpur Website (assistant reference, not a public page)

READ THIS FILE FIRST at the start of any chat about this website. It is the single source of truth for the project. Keep it up to date after meaningful changes.

## 0. MANDATE (what the assistant is here to do)
The main task is to EDIT THIS WEBSITE ON THE MAINTAINER'S COMMAND.
- The maintainer (Dr. Vibhawari Dani) describes a change; the assistant makes it and commits it live to `main`.
- Setup is DONE: the GitHub connector is installed with read+write on this repo, so edits commit straight to `main` through the connector — no browser, no folder access needed.
- Default behaviour: read the relevant file, make the edit (BOTH language versions — see section 4), commit to `main`, then confirm and note the live site updates in ~1-2 minutes.
- Do not re-litigate access setup; it works. Only revisit it if a write returns 403 (see section 2 note).

## 0.1 INSTRUCTION SOURCE — the "speak app" (voice transcripts)
Edit instructions are usually given by VOICE and reach the assistant as transcripts in the recordings/speak-app connector (list_recordings / get_recording).
- HOW TO PICK THE RIGHT RECORDING: the maintainer will NAME or DATE the recording to use each time (often via the "Speak App — Transcript Picker" artifact's "Use this" button). Do NOT guess or auto-pick the newest — the speak app holds many unrelated recordings (medical notes, etc.).
- Fetch that recording's `renderedText`, treat it as the maintainer's instruction, and make the described website change.
- Because transcription can mishear names/terms, briefly confirm the understood instruction (especially proper nouns, Marathi/English text, and photo placement) before or right after committing.
- Transcripts may span multiple recordings (e.g., one continues with "Additionally…"); ask the maintainer if a referenced instruction seems cut off.

## 0.2 CORRECTIONS LOG — learn from past mistakes (CORRECTIONS.md)
CORRECTIONS.md in this repo is the assistant's memory of mistakes and the maintainer's corrections.
- READ CORRECTIONS.md at the start of every chat (right after this SOP) and honour every rule in it.
- Whenever the maintainer points out a mistake or gives a correction, APPEND a new entry (newest at top of its log) to CORRECTIONS.md and commit it to main.
- Before any edit, scan CORRECTIONS.md for a rule that applies.

## 1. What this project is
Bilingual (Marathi / English) static website for Saraswati Mandir, Nagpur. Plain HTML, CSS, JavaScript, no build step.
- Maintainer: Dr. Vibhawari Dani (drvsdani@mahantrust.org)
- GitHub account: drvsdani-ctrl
- Repository: drvsdani-ctrl/saraswati-mandir-website (public)
- Live site: https://saraswatimandirnagpur.org (custom domain via CNAME)
- Also at: https://drvsdani-ctrl.github.io/saraswati-mandir-website/
- Hosting: GitHub Pages, branch main, folder / (root)

## 2. How to work on this site
1. Access is via the GitHub connector, no local folder needed. The Claude Github MCP Connector app is INSTALLED on this repo with read+write, so commits work directly through the connector.
2. Edit method: commit directly to `main`. Changes go live in ~1-2 minutes. Use a pull request only for large changes the maintainer wants to preview.
3. Use clear commit messages.
4. Fetch the current file fresh before editing (its SHA is required to update it).
5. Verify after editing, checking both language versions.
Note: if a write ever returns 403 "Resource not accessible by integration," the app was uninstalled — reinstall it at github.com/apps/claude-github-mcp-connector, click Install, and select this repo (ignore the "state: Field required" redirect error; the install still registers).

## 3. Site structure (pages)
- index.html — Saraswati Mandir (home, links to all activities)
- school.html — Kalyan Mook Badhir Vidyalaya and Junior College
- library.html — Late Ms. Vidyawati Joglekar Library
- reading-room.html — Reading Room (Abhyasika)
- hostel.html — Working Women's Hostel
- badminton.html — Capt. Manohar Vaidya Badminton Training Centre
- khandoba.html — Khandoba Hanuman Devasthan Balwadi
Folders: css/ (styles), js/ (scripts incl. main.js), images/ (photos). Other: README.md, CNAME, .nojekyll, PROJECT_SOP.md, CORRECTIONS.md.

## 4. Content conventions (read before editing text)
- Bilingual, always in pairs. Every visible text appears twice: once in an element with class "mr" (Marathi) and once with class "en" (English). Edit BOTH versions so the languages stay in sync.
- Language toggle: the header buttons switch the whole page; the choice is remembered in the browser. Default language is Marathi. To make English default, change 'mr' to 'en' in the two places it appears in js/main.js.
- Adding a photo: copy the .jpg into images/ and add one line in the page's gallery section following the existing pattern. Place each photo near its matching activity (e.g., main-building photos on the Saraswati Mandir home page, school photos on school.html).

## 5. Known pending items (add when material is available)
- Charitable Commissioner registration number and date (home page).
- Exact years of the school's grant milestones (school.html).
- A photograph of the Khandoba Balwadi (khandoba.html).

## 6. Start-of-chat checklist
1. Confirm repo drvsdani-ctrl/saraswati-mandir-website.
2. Read this PROJECT_SOP.md, then read CORRECTIONS.md.
3. Mandate = edit the website on the maintainer's command; commit directly to main.
4. Instructions come by voice via the speak-app connector; the maintainer names/dates the recording to use.
5. For any text change, update BOTH mr and en versions.
6. After committing, note the live site updates in ~1-2 minutes.
7. If the maintainer gives a correction, append it to CORRECTIONS.md.

## 7. Change log
- 2026-07-15: SOP created; GitHub connector installed with write access; commit-to-main workflow confirmed working; speak-app transcription workflow added; CORRECTIONS.md log added and wired in.

Last updated: 2026-07-15.
