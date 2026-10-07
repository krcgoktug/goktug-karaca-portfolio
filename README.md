# goktugkaraca.com

Personal site of Göktuğ Karaca. Astro (static output) + React islands + Tailwind,
deployed on Vercel. English at `/`, Turkish at `/tr/`.

Built on the [dark-minimal](https://github.com/Gothsec/dark-minimal) Astro theme
by Oscar Hernandez (MIT — see `LICENSE-dark-minimal`). The theme's visual
language is kept; the structure, content and the arrival animation are this
site's own.

## Run

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # astro check + static build into dist/
```

Node 20+ is required.

## Where things live

| Path | What it holds |
|------|----------------|
| `src/data/content.ts` | **Every word on the site, in both languages** — projects, positions, education, stack, dictionaries. |
| `src/data/logos.ts` | Brand marks for the logo wall, generated from simple-icons (CC0). |
| `src/components/site.astro` | Composes the page; `src/pages/index.astro` and `src/pages/tr/index.astro` just pick the language. |
| `src/components/enter.astro` | The first-visit arrival: the site running on a laptop you click into. |
| `src/lib/emblem.ts` | Deterministic cover art for projects with no screenshot. |
| `public/assets/` | Portrait, desk photograph, favicon, project screenshots. |

## Adding a project

Append to `PROJECTS` in `src/data/content.ts`:

```ts
{
  repo: "repo-name",            // github.com/krcgoktug/<repo>
  name: "Display name",
  cat: "ai",                    // ai | backend | web | data | systems
  year: 2026,
  tags: ["Python", "FastAPI"],
  live: "https://…",            // or null — adds the LIVE badge
  team: true,
  image: "/assets/shots/x.webp",// optional; omit and a sigil is drawn instead
  en: "One or two sentences.",
  tr: "Bir iki cümle."
}
```

It renders in both languages and joins the filter counts automatically.

## Things worth knowing

- **Covers are not stock images.** Three projects have a real screenshot of
  their own interface; the rest are a CLI, an API or a Verilog CPU and get a
  sigil drawn from the repository name instead of a fake mockup.
- **The arrival runs once per browser session** (`sessionStorage`), so a refresh
  goes straight to the page but a fresh visit gets the desk again. `?intro=1`
  forces it; it is skipped for reduced motion, touch, viewports under 940px,
  deep links, and inside the laptop's own copy (`?embed=1`) so it cannot recurse.
- **Turkish needs the latin-ext font face.** Without it `ğ ş ı` fall back to a
  system font mid-word. Both faces are declared with their unicode ranges.
- **`vercel.json` pins the framework** to Astro so the project's stored preset
  cannot deploy the repo root instead of `dist/`.
