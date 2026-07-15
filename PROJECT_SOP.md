PROJECT_SOP.md# PROJECT SOP — Saraswati Mandir, Nagpur Website (assistant reference, not a public page)

Read this file first at the start of any chat about this website. It is the single source of truth for how to work on the project.

## 1. What this project is
Bilingual (Marathi / English) static website for Saraswati Mandir, Nagpur. Plain HTML, CSS, JavaScript, no build step.
- Maintainer: Dr. Vibhawari Dani (drvsdani@mahantrust.org)
- GitHub account: drvsdani-ctrl
- Repository: drvsdani-ctrl/saraswati-mandir-website (public)
- Live site: https://saraswatimandirnagpur.org (custom domain via CNAME)
- Also at: https://drvsdani-ctrl.github.io/saraswati-mandir-website/
- Hosting: GitHub Pages, branch main, folder / (root)

## 2. How to work on this site
1. Access is via the GitHub connector, no local folder needed.
2. Edit method: commit directly to main. Changes go live in ~1-2 minutes. Use a pull request only for large changes the maintainer wants to preview.
3. Use clear commit messages.
4. Fetch the current file fresh before editing (SHA required to update).
5. Verify after editing, checking both language versions.
Note: the connected GitHub account must have write access. A 403 "Resource not accessible by integration" means write access is missing.

## 3. Site structure (pages)
- index.html — Saraswati Mandir (home, links to all activities)
- school.html — Kalyan Mook Badhir Vidyalaya and Junior College
- library.html — Late Ms. Vidyawati Joglekar Library
- reading-room.html — Reading Room (Abhyasika)
- hostel.html — Working Women's Hostel
- badminton.html — Capt. Manohar Vaidya Badminton Training Centre
- khandoba.html — Khandoba Hanuman Devasthan Balwadi
Folders: css/ (styles), js/ (scripts incl. main.js), images/ (photos). Other: README.md, CNAME, .nojekyll.

## 4. Content conventions (read before editing text)
- Bilingual, always in pairs. Every visible text appears twice: once in an element with class "mr" (Marathi) and once with class "en" (English). Edit BOTH versions.
- Language toggle: the header buttons switch the whole page; the choice is remembered in the browser. Default language is Marathi. To make English default, change 'mr' to 'en' in the two places it appears in js/main.js.
- Adding a photo: copy the .jpg into images/ and add one line in the page's gallery section following the existing pattern.

## 5. Known pending items
- Charitable Commissioner registration number and date (home page).
- Exact years of the school's grant milestones (school.html).
- A photograph of the Khandoba Balwadi (khandoba.html).

## 6. Start-of-chat checklist
1. Confirm repo drvsdani-ctrl/saraswati-mandir-website.
2. Read this PROJECT_SOP.md.
3. Default edit method = commit directly to main.
4. For any text change, update both mr and en versions.
5. Live site updates ~1-2 minutes after commit.

Last updated: 2026-07-15.
