# breastdensityworkshop — TODO

Working list of outstanding items. Excluded from the Jekyll build via
`_config.yml`, so this file lives in the repo but never appears on the
live site. Use `- [ ]` checkboxes; GitHub renders them as tickable in
the web UI.

For tactical, code-adjacent reminders, prefer an `<!-- TODO: ... -->`
comment right next to the relevant code instead of an entry here.

## Site-wide

- [ ] Cloudflare + custom domain `breastdensityworkshop.org`
  (point Pages at the apex, configure DNS, enforce HTTPS)
- [ ] Cloudflare Email Routing — set up `news@breastdensityworkshop.org`
  → `johnshep@hawaii.edu` (and any other `*@` addresses needed)
- [ ] Once Cloudflare + DKIM is verified, switch the Mailchimp **From**
  address from `johnshep@hawaii.edu` to `news@breastdensityworkshop.org`
  for stronger brand alignment
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
