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

Push to the `main` branch of your GitHub repo. GitHub Pages builds and deploys automatically within ~1 minute.

To connect the custom domain `breastdensityworkshop.org`:
1. Add a `CNAME` file to this repo containing: `breastdensityworkshop.org`
2. In GitHub repo Settings → Pages → Custom domain: enter `breastdensityworkshop.org`
3. Update DNS at SiteGround: add a CNAME record pointing `www` to `yourusername.github.io`, and A records for the apex domain pointing to GitHub's IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)

## Services to configure

- **Contact form**: Sign up at [formspree.io](https://formspree.io), create a form, replace `YOUR_FORM_ID` in `contact/index.html`
- **Mailing list**: Get your Mailchimp embed form URL and replace the placeholder values in `index.html`
