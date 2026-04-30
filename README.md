# IBDW — International Breast Density & Cancer Risk Assessment Workshop

Static Jekyll site for [breastdensityworkshop.org](https://breastdensityworkshop.org), hosted on GitHub Pages.

## How to update content

### Each workshop cycle (most common updates)

**1. Update workshop details** — edit `_config.yml`:
```yaml
workshop:
  number: "13th"
  dates: "June 1–3, 2029"
  location: "Maui Island, Hawaiʻi"
  venue: "Grand Wailea"
  registration_open: false
  slides_url: ""
```

**2. Update sponsors** — edit `_data/sponsors.yml`. Add/remove entries under each tier. Drop new logo images in `assets/images/sponsors/`.

**3. Add a past workshop** — add a new entry at the TOP of `_data/workshops.yml`:
```yaml
- number: "12th"
  year: 2027
  location: "Maui, HI"
  dates: "June 2–4, 2027"
  slides_url: "https://drive.google.com/..."
```

**4. Update the organizing committee** — edit `_data/committee.yml`. Add headshot photos to `assets/images/committee/`.

### Homepage content
Edit `index.html` for changes to the hero text, letter from chairs, or feature cards.

### Inner pages
Each page is a single HTML file:
- `about/index.html` — About the Workshop
- `committee/index.html` — Organizing Committee
- `sponsors/index.html` — Sponsors
- `program/index.html` — Program & Past Workshops
- `contact/index.html` — Contact (uses Formspree)

## Site management and contribution workflow

The site is the workshop's public face, so changes should go through review before they ship. The default flow for everyone — researchers, students, and admins alike — is **branch → pull request → admin review → merge**. Direct commits to `main` should be reserved for very small fixes by admins (typo, broken link, etc.).

### Who's who

- **Site administrators** — currently **John Shepherd** and **Thomas Wolfgruber**. They have write access to `main` and approve merges. Day-to-day editorial decisions (what content goes up, what gets corrected) flow through them.
- **Contributors** — anyone in the research group with a GitHub account who wants to update workshop details, add a sponsor, post a new committee member, or fix something. Contributors get write access to branches but not direct write to `main`.

### Contribution flow (researchers + students)

1. **Open an issue first** (optional but recommended for non-trivial changes) so the change is visible to the group and won't conflict with someone else's edits.

2. **Create a branch** off `main`. Pick a short, descriptive name:
   - Workshop cycle update: `cycle/13th-workshop-2029`
   - Sponsor add: `sponsors/add-acme-imaging`
   - Committee update: `committee/add-jane-doe`
   - Bug fix: `fix/broken-link-program-page`

3. **Make your edits.** Most content lives in obvious places — see [How to update content](#how-to-update-content) above. Common edits:
   - Workshop details → `_config.yml` (the `workshop:` block)
   - Sponsors → `_data/sponsors.yml` (+ logo files in `assets/images/sponsors/`)
   - Past workshops → `_data/workshops.yml`
   - Organizing committee → `_data/committee.yml` (+ headshots in `assets/images/committee/`)
   - Page copy → that page's `index.html`

4. **Preview locally** before opening the PR (`bundle exec jekyll serve`, then visit `http://localhost:4000/`). GitHub Pages does **not** build feature branches automatically, so the PR diff is what reviewers see.

5. **Open a pull request** against `main`. Write a one-line summary of the change. Tag a site administrator (`@jshepherd46`, `@thomas-wolfgruber` — or whoever the admin GitHub handles are) for review.

6. **Wait for review.** An administrator either approves and merges, or requests changes. Once merged, GitHub Pages rebuilds within about 30 seconds and the change goes live.

### For administrators: enforcing this with branch protection

The workflow above is conventional but only **enforced** if branch protection is configured. To require PR + review on every change to `main`:

1. Repo → **Settings → Branches → Branch protection rules → Add rule** (or "Add classic branch protection rule")
2. Pattern: `main`
3. Enable:
   - **Require a pull request before merging**
   - **Require approvals: 1**
   - **Dismiss stale pull request approvals when new commits are pushed** (recommended)
   - **Do not allow bypassing the above settings** (recommended; otherwise admins can override)

Without these rules, anyone with write access can still push directly. The rules are what make the workflow mandatory.

### Optional: a `CODEOWNERS` file for automatic reviewer assignment

If you want a specific person (or people) automatically requested for review based on which paths change, add `.github/CODEOWNERS`. Example:

```
# Default reviewer for everything
*                              @jshepherd46

# Workshop cycle / config changes (high stakes — review carefully)
_config.yml                    @jshepherd46 @thomas-wolfgruber

# Sponsor and committee data
_data/sponsors.yml             @jshepherd46 @thomas-wolfgruber
_data/committee.yml            @jshepherd46 @thomas-wolfgruber
```

Pair this with the branch-protection rule **Require review from Code Owners** to enforce.

### Sister site

The Shepherd Research Lab's main website lives in a separate repo at [`shepherd-lab/shepherdresearchlab`](https://github.com/shepherd-lab/shepherdresearchlab). The two sites share visual lineage (the SRL stylesheet was adapted from this one) but are independently deployed.

## Local development

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

## Images needed

Place these files in `assets/images/` before launch:
- `hero-bg.jpg` — Full-width hero photo (2560px wide recommended)
- `workshop-photo.jpg` — Group photo for About page
- `committee/shepherd.jpg`, `committee/kerlikowske.jpg`, etc. — Headshots (square, 400x400px+)
- `sponsors/` — All sponsor logos (download from current WP site)
- `favicon.png` — 32x32 site icon

## Deployment

Push to the `main` branch of `shepherd-lab/breastdensityworkshop`. GitHub Pages builds and deploys automatically within ~1 minute.

Currently served at: `https://shepherd-lab.github.io/breastdensityworkshop/` (after the org transfer from `jshepherd46` to `shepherd-lab`).

To connect the custom domain `breastdensityworkshop.org` (Cloudflare + GitHub Pages):
1. Add a `CNAME` file to this repo containing: `breastdensityworkshop.org`
2. In GitHub repo Settings → Pages → Custom domain: enter `breastdensityworkshop.org`
3. In Cloudflare DNS for `breastdensityworkshop.org`, add A records for apex → GitHub Pages IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and CNAME `www` → `shepherd-lab.github.io`. SSL/TLS mode: Full. Proxy: DNS-only (gray cloud) until the Let's Encrypt cert provisions, then optionally enable proxy.
4. Switch nameservers at the registrar to the two Cloudflare nameservers shown in the Cloudflare dashboard.
5. Once the GitHub Pages DNS check turns green: enable **Enforce HTTPS**, then change `_config.yml` to `url: "https://breastdensityworkshop.org"` and `baseurl: ""`.

## Services to configure

- **Contact form**: Sign up at [formspree.io](https://formspree.io), create a form, replace `YOUR_FORM_ID` in `contact/index.html`
- **Mailing list**: Get your Mailchimp embed form URL and replace the placeholder values in `index.html`
