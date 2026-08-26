# goktugkaraca.com

Personal site of Göktuğ Karaca. Plain HTML, CSS and JavaScript — no framework, no
build step, no dependencies. Deployed as a static site on Vercel.

## Files

| File | What it holds |
|------|----------------|
| `index.html` | Page structure only. Text that changes with language carries a `data-i18n` key. |
| `styles.css` | All styling and the motion system. Design tokens live in `:root` / `[data-theme="light"]`. |
| `script.js` | Content data (projects, timeline, stack, both languages) + all behaviour. |
| `resume/index.html` | Inline résumé viewer at `/resume`. |
| `vercel.json` | Redirects `/resume.pdf` to the viewer, serves the PDF inline. |

## Adding a project

Everything on the work index comes from the `PROJECTS` array at the top of
`script.js`. Add an object and it renders in both languages, appears in the hover
preview, and joins the filter counts automatically:

```js
{
  repo: "repo-name",              // github.com/krcgoktug/<repo>
  name: "Display name",
  cat: "ai",                      // ai | backend | web | data | systems
  year: 2026,                     // fallback; the live GitHub API overrides it
  tags: ["Python", "FastAPI"],
  live: "https://…",              // or null — adds the LIVE badge
  team: true,                     // shows "Team project" in the hover preview
  en: "One or two sentences.",
  tr: "Bir iki cümle."
}
```

The ticker count is derived from the array length, so it cannot go stale.

Timeline entries live in `TIMELINE`, the stack table in `SPEC`, the hero strip in
`INTERESTS`, and every other string in `I18N.en` / `I18N.tr`.

## Behaviour worth knowing

- **Live GitHub data.** On load the page asks the public GitHub API for the repo
  list and replaces each row's year with the real last-push year. If the request
  fails (offline, rate limit) the static years stay — nothing breaks.
- **Reveals are geometry based**, not `IntersectionObserver`, so they also work
  inside embedded and headless contexts where observer callbacks never fire. They
  are re-checked on scroll and on a slow animation-frame tick, so a deep link or a
  late-loading font can never leave a section stuck invisible.
- **No component library, on purpose.** There are no buttons, cards, pills or
  badges — every control is a piece of typography with a rule under it. If a
  change starts to look like a UI kit, it is wrong.
- **Theme and language** persist in `localStorage` (`gk-theme`, `gk-lang`) and are
  applied before first paint by the inline script in `<head>`.
- **`prefers-reduced-motion`** switches off the boot screen, the cursor, the
  marquee, the pointer field and every transition.

## Run locally

Any static server, e.g.:

```bash
python -m http.server 4321
```

## Deploy

Push to `main`; Vercel builds the static output and serves it at
[goktugkaraca.com](https://www.goktugkaraca.com/).
