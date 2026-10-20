# Arsalan Khan — website update

Updated 20 October 2026 using the supplied October 2026 résumé as the primary source and the original HTML, CSS, and JavaScript as the secondary source. No framework, build system, external font service, or runtime dependency was added. The files have not been deployed.

## Use the files

Keep these files together, or copy them into your existing website:

```text
index.html
stylesheet.css
script.js
data/Resume_Arsalan.pdf
images/                 (optional photos and original image assets)
README.md
```

Open `index.html` locally or serve the folder with your usual static host. The ZIP contains all three complete website files and an unchanged copy of the supplied résumé, already linked as `data/Resume_Arsalan.pdf`. Use these conventional filenames; the upload suffixes such as `(1)` are not part of the website's file references. Keep your existing `images/` and `data/` folders when copying this update into an existing site.

## Change log

### Biography and contact

- **`index.html` — header/bio:** Replaced the undergraduate biography with the current IQC master's introduction and both supervisors. Summarized entanglement research, experimental automation, the CSA role, and the year at Lumentum to establish a clear research focus.
- **`index.html` — header/bio:** Highlighted the CGQC co-chair role and teaching/outreach. Framed academic, industry, and government leadership as future possibilities, with helping shape the quantum internet as the long-term ambition.
- **`index.html` — contact links and metadata:** Replaced the old Toronto email with the résumé's Waterloo address, added the supplied LinkedIn profile, linked the included résumé PDF, updated page descriptions, and removed the outdated-website notice.

### Research, leadership, and education

- **`index.html` — Research & Engineering:** Added the IQC and CSA positions and their current work. Updated completed roles to past tense, corrected Helmy-group dates to May–December 2023 and September–November 2024, and corrected the spectrometry role to May–December 2022. Condensed descriptions around specific methods and contributions.
- **`index.html` — Lumentum entry:** Replaced an expected end date with December 2024. Described the insertion-loss investigation and its influence on design/supplier decisions using the résumé, removing inflated language about recognition and impact.
- **`index.html` — Leadership & Outreach:** Added CGQC, USEQIP teaching, and children's outreach as a prominent, initially expanded section. Clearly labeled the May 2027 conference as planned: four days, approximately 100 graduate researchers, and a 10-member committee. Attributed C$20,000 in secured funding to the committee, with an October 2026 date stamp.
- **`index.html` — FINCH entry:** Retained the earlier aerospace work and corrected its end date to September 2023.
- **`index.html` — Education & Awards:** Added the MASc with expected August 2027 completion, the completed May 2025 HBSc, GPAs, supervisors, and the résumé's awards. Used Physics major/Computer Science minor; removed the old Mathematics-minor claim. Explicitly identified the declined fellowship.

### Publications, talks, and technical breadth

- **`index.html` — Publications & Theses:** Added the 2026 QEYSSat SPIE proceedings citation and supplied DOI. Completed the JLT citation with pages and DOI. Kept published outputs separate from ongoing research, and retained both thesis titles with document placeholders.
- **`index.html` — Conferences & Talks:** Added the two 2026 QEYSSat poster appearances, corrected CUCAI to March 2024, and retained earlier presentations with clear talk/poster labels and authors.
- **`index.html` — Technical Skills:** Added a compact summary of optics, lab automation, scientific computing, software, and electronics supported by the résumé or original site.
- **`index.html` — Earlier Software Experience / Selected Technical Projects:** Preserved ABen Hub, TAPP, QuSparse, machine unlearning, cassava classification, Higgs-data classification, the FM transmitter, Artemify, and robotics. Shortened repetitive descriptions and placed older material in initially closed sections. Removed unqualified 80%/99% accuracy claims from the older ML entries because the supplied files do not establish their evaluation conditions.
- **`index.html` — Outside the Lab:** Retained the drawing, clothing, music, and cats material to preserve the personal character of the site; moved it into one compact section.

### Design and usability

- **`stylesheet.css` — global layout and typography:** Preserved the approximately 800 px content column, white background, blue links, restrained rounded section borders, and grey disclosure headers. Standardized font inheritance, heading sizes, line spacing, and section margins. Adjusted the orange hover colour for readable contrast.
- **`index.html` / `stylesheet.css` — navigation:** Added wrapping section links, a skip link, and a back-to-top link. Added semantic page landmarks, one primary heading, consistent section headings, and visible keyboard focus outlines.
- **`index.html` / `script.js` — disclosures:** Replaced clickable divs and manually calculated heights with native `details`/`summary`. These controls support keyboard operation without JavaScript, and expanded content can reflow without clipping. JavaScript opens the relevant section for a navigation link or nested URL fragment, including repeated clicks on the current fragment.
- **`stylesheet.css` — mobile rules:** Stacked the biography and experience rows below 600 px, allowed navigation and long links to wrap, and made the cat gallery adapt to available width. Removed fixed text-column widths and fixed gallery dimensions that could overflow a small screen.
- **`index.html` / `script.js` / `stylesheet.css` — assets:** Replaced missing-photo requests with labeled, opt-in placeholders. Optional thumbnails occupy no space until successfully loaded. Failed configured images retain a text placeholder or hide the optional thumbnail. Removed the active missing-favicon reference and missing-PDF hyperlinks.
- **`index.html` — markup:** Removed the unmatched closing div, inline layout styles, vague link labels, and image links that pointed to missing files. Added meaningful image alternative text and deferred script loading.
- **`stylesheet.css` / `script.js` — printing:** Added a simple print stylesheet and temporary expansion of all sections, restoring the reader's previous disclosure states afterward.

## Add your assets

The delivered page makes no requests for missing photos or reports. Search `index.html` for `PHOTO PLACEHOLDER`, `DOCUMENT PLACEHOLDER`, or `OPTIONAL IMAGE` to find every replacement point. File names and capitalization are significant on many hosts.

### Photos

Upload the photo at the listed path and fill the nearby image's empty `data-src`. For example, change `data-src=""` to `data-src="images/Headshot_Square.jpg"`. Leave `hidden` on the image; the script reveals it only after a successful load. If you choose another file path, use that exact relative path in `data-src`.

| Location | Suggested path |
| --- | --- |
| Biography portrait | `images/Headshot_Square.jpg` |
| Minu | `images/Minu.JPG` |
| Willi | `images/Willi.JPG` |
| Both cats | `images/MinuAndWilli.JPG` |

Optional thumbnail slots retain these original paths: `images/lumentum.jpeg`, `images/SPDC.png`, `images/SuperCDMS.jpeg`, `images/NL_cased.png`, `images/UTAT_logo.png`, and `images/fm_transmitter.jpeg`. Enable them through `data-src` in the same way. They are optional; the text layout works without them. Other old images are no longer referenced, but you do not need to delete them from your existing host.

To restore the original favicon, add `images/favicon/favicon.ico` and uncomment its link in the HTML head.

### Documents

Each missing document currently has a non-clickable “PDF · to add” label. Add the file, then replace that label's `span` with the complete anchor shown in the adjacent HTML comment. This intentionally requires enabling the link only when its target exists.

| Location | Suggested path |
| --- | --- |
| Engineering thesis | `data/ECE_Thesis.pdf` |
| Physics thesis | `data/PHY479_Final_Report.pdf` |
| ABen Hub proposal | `data/ABenHub_Proposal.pdf` |
| Machine unlearning report | `data/Machine_Unlearning.pdf` |
| FM transmitter report | `data/FM_Transmitter.pdf` |

The current résumé is already included at `data/Resume_Arsalan.pdf`; replace that file when your résumé changes. Remove any optional placeholder you do not want to display.

## Information to confirm

- The dates, degree names, awards, current roles, publication details, and CGQC figures follow the supplied résumé. No conflicting old-site value was retained over it. Update CGQC's schedule, attendance estimate, and funding statement as plans develop.
- ABen Hub, TAPP, cassava/Higgs projects, Artemify's eight-person team, robotics, and personal interests were retained from the original site because they were not contradicted by the résumé. Review these older entries if their wording or continued inclusion should change.
- Confirm that the older notebooks/repository remain accessible to visitors, and that any report you add—especially the ABen Hub proposal—is intended for public sharing.

## Verification

Completed checks:

- HTML nesting and unique IDs; all 10 in-page anchor links resolve to existing targets.
- All three active local resource references resolve: CSS, JavaScript, and the résumé. The included PDF is byte-for-byte identical to the supplied résumé.
- JavaScript syntax check passed. Script behaviour tests using a DOM test double passed for initial state, repeated navigation links, modified clicks, nested deep links, malformed/unknown fragments, image load/error fallbacks, and print-state restoration. These are logic tests, not browser tests.
- All 10 image slots are opt-in and make no asset request by default. Missing PDFs are text labels, not broken links.
- Text/link colours on white meet a 4.5:1 contrast ratio; CSS source checks confirmed responsive rules, wrapping safeguards, balanced blocks, and removal of the old fixed-height panel code.

Not verified:

- Browser automation was unavailable through the supported preview workflow. Desktop/mobile rendering, actual browser keyboard and screen-reader behaviour, image cropping, browser printing, and cross-browser compatibility were not visually or interactively tested. The responsive implementation has been reviewed in source only.
- Live external availability could not be established in this environment. The seven retained external URLs come directly from the supplied résumé or original site: LinkedIn, both publication DOIs, the QuSparse project page, the Kaggle notebook, the Colab notebook, and the Artemify GitHub repository. They have not been certified as live. Email delivery was not tested.
- No hosting, deployment, or existing production-domain configuration was changed or tested.

For the final browser check, open the page on desktop and a narrow mobile viewport, use Tab/Enter/Space on the navigation and disclosure controls, visit a nested fragment such as `#iqc-research`, add a real photo, deliberately try an invalid photo path, and inspect print preview. These are the remaining checks before republishing.
