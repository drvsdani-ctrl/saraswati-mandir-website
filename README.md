# Saraswati Mandir, Nagpur — Website

Bilingual (Marathi / English) static website. No build step needed — plain HTML, CSS and JavaScript, ready for GitHub Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Saraswati Mandir (home, with links to all activities) |
| `school.html` | Kalyan Mook Badhir Vidyalaya & Junior College |
| `library.html` | Late Ms. Vidyawati Joglekar Library |
| `reading-room.html` | Reading Room (Abhyasika) |
| `hostel.html` | Working Women's Hostel |
| `badminton.html` | Capt. Manohar Vaidya Badminton Training Centre |
| `khandoba.html` | Khandoba Hanuman Devasthan Balwadi |

## How to publish on GitHub Pages

1. Create a free account at https://github.com (if you don't have one).
2. Create a new **public** repository, e.g. `saraswati-mandir-website`.
3. Upload ALL files and folders from this `site` folder (index.html, the other .html files, and the `css`, `js`, `images` folders). Keep the folder structure exactly as it is.
   - On the repository page click **Add file → Upload files**, drag everything in, then click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**. Save.
5. After a minute or two your site will be live at `https://<your-username>.github.io/saraswati-mandir-website/`.

## Connecting your own domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `saraswatimandirnagpur.org`) and save. GitHub creates a `CNAME` file automatically.
2. At your domain registrar, add these DNS records:
   - For the root domain, four **A records** pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For `www`, a **CNAME record** pointing to `<your-username>.github.io`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the domain is verified (may take up to a day).

## Language toggle

The मराठी / English buttons in the header switch every page instantly. The visitor's choice is remembered in their browser. Default language is Marathi; to make English the default, change `'mr'` to `'en'` in the two places it appears in `js/main.js`.

## Editing content later

- All text lives directly in the .html files. Every piece of text appears twice — once inside an element with `class="mr"` (Marathi) and once with `class="en"` (English). Edit both to keep the languages in sync.
- To add a photo: copy the .jpg into `images/` and add one line inside the page's gallery section following the existing pattern.
- Some details are still pending in the source material and can be added when ready: the Charitable Commissioner registration number and date (home page), the exact years of the school's grant milestones (school.html), and a photograph of the Khandoba Balwadi.
