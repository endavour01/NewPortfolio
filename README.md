# Vikalp Soni — Portfolio

This is my personal portfolio: a small, dark-themed site where I introduce myself, share a few projects, and make it easy to get in touch.

I built it with plain HTML, CSS, and JavaScript. There’s no framework or build step to set up.

## What’s on the site

- **Home:** a short introduction and links to my work and email.
- **About:** a little about what I work on, the tools and areas I’m learning, and a few interests outside tech.
- **Projects:** four project cards that open more details when selected.
- **Contact:** links to GitHub, LinkedIn, and email.

## Projects

- **Psyduck** — a mobile trivia and word game, built around short challenges and quick rounds.
- **ShadowNet** — an offline messaging project dedicated to the Indian Army, exploring communication in shadow zones using nearby connections such as Bluetooth and Wi-Fi.
- **Sports OTG** — a platform concept for finding sports facilities and booking turf time.
- **Fix My Campus** — a campus tool for reporting issues and following their status.

## Run it locally

There’s nothing to install. Open `index.html` in a browser, or serve the folder with a local static server. In VS Code, the Live Server extension is another easy option.

The site uses Font Awesome from its CDN for a few interface icons, so those icons need an internet connection to load.

## Files

- `index.html` — page content and structure
- `styles.css` — layout, responsive styles, and animations
- `script.js` — navigation and project detail dialogs

## Publishing

A GitHub Actions workflow is included in `.github/workflows/deploy.yml` to publish the site with GitHub Pages when a new commit is pushed to `main`. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
