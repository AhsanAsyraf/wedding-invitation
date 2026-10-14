# Ahsan & Bariyah — Wedding Invitation Site

A static, mobile-first invitation website built from the six supplied PowerPoint slides. No framework, server, API key, or build step is required.

## Publish with GitHub Pages

1. Create a GitHub repository for the invitation.
2. Extract this ZIP and upload **the contents** of this folder (`index.html`, `styles.css`, `script.js`, `assets/`, and `README.md`) to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select your main branch and `/(root)`, then save.
5. Wait for Pages to publish, then share the URL GitHub shows.

## What is functional

- Six invitation slides appear vertically and scroll/snap one page at a time on mobile.
- The countdown updates every second until **25 December 2026 at 8:00 PM Malaysia Time (UTC+08:00)**.
- The Google Maps and Waze icons on the location slide are tappable and open the venue link.

## Notes

The supplied presentation references fonts that are not embedded in the file. To prevent the two script-heavy slides from wrapping/overlapping, slides 2 and 3 are laid out as responsive HTML over the original background and ornament artwork, using close web-font alternatives. Slides 1 and 4–6 use rendered slide artwork; the static countdown region on slide 4 is cleared for the live timer overlay.
