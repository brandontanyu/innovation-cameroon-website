# Innovation Cameroon (IC) — Startup Presentation Website

A static, responsive website built with HTML5, CSS3, and minimal JavaScript.

## Structure

```
IC_WEBSITE/
  index.html
  about.html
  projects.html
  mentorship.html
  contact.html
  assets/
    css/styles.css
    js/main.js
    images/
```

## Development
Open `index.html` directly in your browser, or use a simple static server.

## Contact form
The contact form uses Formspree. Replace the `action` attribute in `contact.html` with your Formspree endpoint.

## Deploy on GitHub Pages
1. Create a new GitHub repository (public).
2. Push the contents of `IC_WEBSITE` to the repository root.
3. In GitHub → Settings → Pages → Set Source to `main` branch (root).
4. Your site will be available at `https://<username>.github.io/<repo>/`.

If you deploy under a project subpath, ensure links are relative (as in this project).

### Ensure the URL is `https://innovationcameroon.github.io/<repo>/`
- Host the repository under the GitHub account or organization named `innovationcameroon`.
- Use project pages (any repo name) rather than an org root page. The URL will be `https://innovationcameroon.github.io/<repo>/`.
- Keep links and assets relative (e.g., `assets/...`, `about.html`, `./projects.html`). Avoid root‑absolute paths like `/assets/...`.
- If you later rename the repo, the URL changes; update `index.html` meta tags if you set canonical/OG URLs.
- Optional: add an empty `.nojekyll` file at the repository root to bypass Jekyll processing.

## SEO & Accessibility
- Semantic HTML tags, descriptive `alt` text
- Responsive meta viewport
- High-contrast navy theme
- Basic Open Graph tags in `index.html`

## License
MIT


