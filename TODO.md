# breastdensityworkshop — TODO

Working list of outstanding items. Excluded from the Jekyll build via
`_config.yml`, so this file lives in the repo but never appears on the
live site. Use `- [ ]` checkboxes; GitHub renders them as tickable in
the web UI.

For tactical, code-adjacent reminders, prefer an `<!-- TODO: ... -->`
comment right next to the relevant code instead of an entry here.

## Site-wide

### Cloudflare cutover from SiteGround (multi-phase, no outage window)

Domain registered at SiteGround. WP site at SiteGround being wound
down. Nothing on the old site worth preserving (mailboxes are junk,
URLs not cited externally).

- [ ] **Phase 0 — Pre-flight:** Take a SiteGround full backup; export
      current DNS zone (screenshot the records); note current
      nameservers (e.g. `ns1.siteground.net`, `ns2.siteground.net`)
- [ ] **Phase 1 — Cloudflare onboarding:** Sign up at cloudflare.com,
      add `breastdensityworkshop.org`, choose Free plan, let it scan
      existing DNS — *don't change nameservers yet*
- [ ] **Phase 2 — Cloudflare DNS records:** Add 4× apex A records to
      GitHub Pages IPs (185.199.108.153, 109.153, 110.153, 111.153);
      add CNAME for `www` → `shepherd-lab.github.io`. Set initially
      to "DNS only" (gray cloud) so GH cert validation works
- [ ] **Phase 3 — Repo changes:** Add `CNAME` file with
      `breastdensityworkshop.org`; update `_config.yml` (`url:` to
      `https://breastdensityworkshop.org`, `baseurl: ""`); push
- [ ] **Phase 4 — GitHub Pages config:** Repo Settings → Pages →
      Custom domain `breastdensityworkshop.org` (DNS check fails
      until Phase 5 — expected)
- [ ] **Phase 5 — CUTOVER:** In SiteGround Domains panel, change
      nameservers from SiteGround's to Cloudflare's two assigned
      ones. DNS propagates 5 min–few hours; old WP site goes dark
- [ ] **Phase 6 — HTTPS:** After GH issues Let's Encrypt cert
      (auto), enable "Enforce HTTPS" in repo Pages settings
- [ ] **Phase 7 — Email Routing:** Cloudflare → Email Routing →
      forward `contact@`, `news@`, `info@`, `admin@`, etc. →
      `johnshep@hawaii.edu`. Cloudflare auto-adds MX/SPF records
- [ ] **Phase 8 — Mailchimp domain auth:** Mailchimp → Audience →
      Settings → Verified domains → add CNAMEs to Cloudflare DNS;
      switch From address to `news@breastdensityworkshop.org`
- [ ] **Phase 9 — Verify (wait 48 hrs):** Test site, www redirect,
      email routing, Mailchimp send-as
- [ ] **Phase 10 — SiteGround wind-down:** Cancel WordPress hosting;
      transfer domain registration off SiteGround (Cloudflare
      Registrar is at-cost; Porkbun and Namecheap are alternatives)
- [ ] Set a branded "Subscribe thank you" page in Mailchimp for the IBDW
  audience (Audience → Signup forms → Form builder), so subscribers
  don't see Mailchimp default chrome after submitting
- [ ] Audit `Services to configure` section in `README.md` — likely
  stale after Formspree + Mailchimp wiring

## End-to-end smoke tests

- [ ] Homepage "Stay Informed" form → confirm signup lands in IBDW
  audience (`51f4454cc3`)
- [ ] Contact page Mailchimp form → confirm signup lands in same audience
- [ ] Contact page Formspree (`xqenayql`) → confirm submission email
  arrives in inbox

## Done

(Move completed items here with the date and PR/commit, or just delete
them — whichever you prefer.)
