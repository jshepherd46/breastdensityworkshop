// IBDW — site-wide JS. Loaded with `defer` so it runs after DOM parse.

// Mobile nav toggle
(function () {
  'use strict';

  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // Close on Escape and return focus to the toggle.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when a nav link is activated.
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('open')) setOpen(false);
    });
  });

  // Close on outside click.
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('open') &&
      !toggle.contains(e.target) &&
      !nav.contains(e.target)
    ) {
      setOpen(false);
    }
  });
})();

// Contact form submit feedback
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function () {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }
  });
})();
