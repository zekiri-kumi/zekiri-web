# Template — Landing page implementation (BEM, SEO, GA, responsive, dark)

Copy this file for each new page. **Replace every placeholder** in `ALL_CAPS` before sending the task.

You are a senior frontend engineer. Follow **all** sections strictly.

---

## STOP — gate before any code (read first; this section overrides everything else)

**The new page URL is not optional.** The assignee must fill this in **before** you implement anything.

| Field | Required | Format / example |
|-------|----------|------------------|
| **`NEW_PAGE_ROUTE`** | **YES** | Path only: `/sass`, `/logistica`, `/promo-2025`. **One** leading slash. No domain, no query string. |

### Para quien rellena este prompt (humano) — **dónde escribir la ruta**

**No basta con leer la tabla:** tienes que escribir el valor en **la línea siguiente** (marcada `ASSIGNEE_ROUTE`). Esa es la única línea “oficial” del documento para la URL pública; si el agente se detiene por § STOP, abre este archivo, busca `ASSIGNEE_ROUTE` o `NEW_PAGE_ROUTE=` y corrige **solo** lo que va después del `=` (mantén una barra inicial `/`).

<!-- ASSIGNEE_ROUTE: edit the next line only; must look like /mi-ruta -->
**`NEW_PAGE_ROUTE` =** `/REPLACE_WITH_ROUTE`

*(Si añades o quitas líneas arriba, el número de línea cambia; por eso la búsqueda por texto `NEW_PAGE_ROUTE=` es más fiable que un número fijo.)*

### If `NEW_PAGE_ROUTE` is missing or invalid → do **nothing** in the repo

Treat the task as **blocked** and **stop immediately** when **any** of these is true:

- `NEW_PAGE_ROUTE` is **omitted**
- It is **empty**, whitespace-only, `TBD`, `TODO`, `???`, `ROUTE_SLUG`, or any other **placeholder** (including **`/REPLACE_WITH_ROUTE`** or the literal **`REPLACE_WITH_ROUTE`** in the `ASSIGNEE_ROUTE` line above)
- It does not start with **`/`**
- It looks like a **filesystem path** meant for CSS only (e.g. `sass/`, `./styles`) **without** a separate, explicit `NEW_PAGE_ROUTE` for the browser URL

**When blocked, you must:**

1. **Do not** create, edit, or delete files.
2. **Do not** refactor **`AutomatizacionesPage`**, **`SoftwarePage`**, **`LogisticaPage`**, or any other existing route “by default” or “to be helpful.”
3. Reply with **one short message** in the **same language as the user’s task** when possible: implementation is blocked until the human sets **`NEW_PAGE_ROUTE`** on the **`ASSIGNEE_ROUTE`** line (search this file for `NEW_PAGE_ROUTE=` or `REPLACE_WITH_ROUTE`). Give an example path: `/sass`. **Do not** only say “falta la ruta” without pointing to **that** fill-in line.

**Only after** `NEW_PAGE_ROUTE` is a concrete path (e.g. `/sass`) may you add `src/pages/...` and proceed with the rest of this template.

---

## 0) Scope — read before writing code (mandatory)

| Item | Value (fill in) |
|------|-------------------|
| **`NEW_PAGE_ROUTE` (required)** | **Must match the `ASSIGNEE_ROUTE` line in § STOP** (`NEW_PAGE_ROUTE=` …). Example: `/sass` → page must load at `http://localhost:4321/sass` |
| **Astro route file** | Derive from `NEW_PAGE_ROUTE`: strip leading `/` → `src/pages/<segment>.astro` or `src/pages/<segment>/index.astro` |
| **Styles on disk** | Directory for CSS only (e.g. `sass/`, `src/styles/pages/foo/`). **Not** the public URL unless it equals `NEW_PAGE_ROUTE` by coincidence. |
| **Framework** | This project: Astro + React islands as needed |

**Hard rules**

1. **`NEW_PAGE_ROUTE` is the source of truth** for what to create in `src/pages/`. Styles folder names **never** imply the URL unless the task also sets `NEW_PAGE_ROUTE` to that path.
2. **The public URL must work** for `NEW_PAGE_ROUTE` (no 404, no blank page).
3. **Implement the markup/content provided in the task** (sections, copy, structure). Do **not** substitute another page’s layout or refactor a different route **unless** the task explicitly says “only change `ExistingPage.tsx`”.
4. **One deliverable UI**, not three separate apps: Steps 1–3 below are **inputs** (desktop reference, mobile reference, dark reference). Merge into **one** responsive, accessible page + **one** stylesheet (or a small BEM split), using **mobile-first CSS** and **`prefers-color-scheme: dark`** for dark styles — unless the task asks for separate builds.

---

## 1) Global rules (mandatory)

- All **code** in **English**: variables, functions, components, file names, comments, `event_label` strings.
- **UI copy** may stay in **Spanish** (or as provided).
- **BEM** for **all** CSS class names (`block`, `block__element`, `block--modifier`).
- **External stylesheets** only — **no** inline styles unless unavoidable (e.g. dynamic values).
- **Mobile-first** responsive layout; then enhance with `min-width` breakpoints.
- **Production-minded**: accessible controls, focus states, no duplicate `id`s.
- **Do not** narrate the work in chat — **implement** and keep the diff focused.

---

## 2) Analytics (gtag / GA4)

- If the site already loads gtag in the layout, **reuse** it; do **not** add a second GA snippet unless missing.
- Respect existing **cookie/consent** behavior if present.
- Track **every primary CTA, navigation control, and important interaction** (e.g. FAQ toggle, social links).

Use this **exact** event shape (labels in English, `snake_case`):

```js
gtag("event", "click", {
  event_category: "button",
  event_label: "descriptive_name_in_english",
});
```

Implement via a small shared helper if the project already has one; still emit the same payload keys/values.

---

## 3) SEO (mandatory)

Ensure the **page** (via layout props or frontmatter) includes:

- Unique **`<title>`** and **meta description**
- **viewport** (usually global layout)
- **robots** (`index, follow` or as specified)
- **Open Graph** (`og:title`, `og:description`, `og:url`, `og:image` as the project does elsewhere)
- **Semantic outline**: exactly **one** main **`h1`** per page; logical **`h2` / `h3`**
- **`alt`** on all informative images; decorative images: `alt=""` or `role="presentation"` as appropriate

---

## 4) Step 1 — Base implementation (structure + styles folder)

- Create/update the **Astro route** for **`NEW_PAGE_ROUTE`** so the URL works.
- Put **BEM CSS** under the agreed **styles directory** (e.g. `STYLES_DIR/landing.css`).
- Convert any pasted HTML into **semantic components**; remove inline styles in favor of BEM classes.
- Wire **layout** metadata for this route (title, description, canonical path).

### Reference markup / copy (source of truth)

```
PASTE_STEP1_DESKTOP_REFERENCE_HERE
```

---

## 5) Step 2 — Mobile / responsive (same page)

- Do **not** fork a second page unless explicitly required.
- Encode mobile layout with **mobile-first** rules; use Step 2 paste as the **reference** for breakpoints, spacing, and type scale.

### Reference (mobile)

```
PASTE_STEP2_MOBILE_REFERENCE_HERE
```

---

## 6) Step 3 — Dark mode (system only)

- **No** dark-mode **toggle** for this page unless explicitly requested.
- Use **`@media (prefers-color-scheme: dark)`** (and/or CSS variables) scoped to the page root class (e.g. `.block`).
- Step 3 paste is the **visual reference** for dark tokens — merge into the same stylesheet.

### Reference (dark)

```
PASTE_STEP3_DARK_REFERENCE_HERE
```

---

## 7) Step 4 — Analytics pass

- Audit the final DOM: **every** button, primary link, FAQ control, and key control must fire the **`click`** event with **`event_category: "button"`** and a unique **`event_label`**.
- Avoid duplicate listeners; prefer delegation or small handlers consistent with the codebase.

---

## 8) Final output checklist (agent must verify)

- [ ] **`NEW_PAGE_ROUTE`** (e.g. `/sass`) loads the correct page in dev and build.
- [ ] Styles live under the agreed **styles directory** with **BEM**; no stray inline styles.
- [ ] **One** responsive implementation + **system** dark styles.
- [ ] **SEO** meta + **semantic** headings + **`alt`** rules satisfied.
- [ ] **gtag** events on all required interactions; payload matches section 2.
- [ ] No unrelated routes refactored unless the task explicitly allowed it.

---

## 9) Common mistakes — do **not** do these

- Putting only CSS in a folder named like the route **without** adding `src/pages/...`.
- Replacing **`AutomatizacionesPage`**, **`SoftwarePage`**, etc., when the task specified **`NEW_PAGE_ROUTE`** for a **different** URL — or when **`NEW_PAGE_ROUTE`** was never provided (see § STOP).
- **Implementing anything** when **`NEW_PAGE_ROUTE`** was omitted or left as a placeholder (see § STOP).
- Shipping three separate HTML pages for Steps 1–3 instead of **one** responsive page.
- Using **`class="dark"`** on `<html>` as the **only** dark mechanism when the spec asked for **`prefers-color-scheme`** (unless the task says to integrate the app theme).
- Skipping **consent** checks for GA when the rest of the app uses them.

---

## 10) Optional project-specific notes

_Add links to `PROMPT_SASS_LANDING.md`, env vars (`PUBLIC_GA4_MEASUREMENT_ID`), layout file path, etc._

---

_End of template._
