# TOKSAM press kit

Static HTML, CSS and JavaScript for GitHub Pages. No build step or backend.

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. You can also open index.html directly; SoundCloud and web fonts require internet access.

## Publish on GitHub Pages

Upload index.html, style.css, script.js, .nojekyll, assets/ and downloads/ to the artist's repository. In repository Settings → Pages, select deployment from the main branch and root folder. All local paths are relative and support a github.io project subdirectory. This folder is not yet connected to a GitHub repository; nothing has been published.

Do not upload the root source ZIP archives or .local/. They are excluded in .gitignore. Only the optimized video is used by the page.

## Content and media

- Background film: supplied `Toksam - Toklab Santuário - 2.1.mp4`, full 24.96-second clip, encoded to 720 × 1280 H.264, muted with no audio track. Original retained under .local/. Full-width object-fit: cover crops the portrait frame on desktop.
- Film starts as its section enters view and pauses offscreen, in a hidden tab or while a photo is open. A pause/play control is provided. Reduced motion defaults to a still poster with manual playback.
- Photos: web-optimized copies of all 11 supplied studio originals. Six selected images appear in the gallery. The photo download links use downloads/fotos presskit.zip, copied from the newer supplied archive (14 JPGs, 45.6 MB).
- Biography: English and Portuguese, edited from the supplied text. The unconfirmed present-tense claim of monthly Kremlin appearances is omitted. Rock in Rio refers specifically to the Ferris wheel stage in 2022. Update index.html and downloads/toksam-biography.txt together.
- Branding: official supplied TOKSAM logos. White wordmark (2.png) in the header and hero, white combined logo (4.png) in the footer, black symbol (5.png) on the SoundCloud record label and lime browser/touch icons. Transparent outer padding is trimmed for display; artwork proportions are preserved. Source files remain in Logo presskit/Logo/.
- Booking: supplied Instagram profile, until a booking email or other contact is supplied.
- Music: SoundCloud profile link and click-to-load official widget. No individual sets were supplied or verified. Profile/widget playback depends on SoundCloud availability; direct profile links remain available.
- Google Fonts loads Barlow Condensed and DM Sans; local font fallbacks are included.

## Verification

Check desktop and mobile layouts, video playback and pause, EN/PT biography switch, photo dialog (including Escape), SoundCloud and download link before publication. External social profiles may block automated inspection.

## TOKLAB section

Expanded from the supplied `TOKLAB - LABEL PRESENTATION.pdf`: Toksam & Friends began in late 2022 and evolved into TOKLAB in 2026. Includes its community mission, teaching/open-decks approach, four dated 2026 editions, and collaboration email/social links. Attendance figures describe those individual events, not unique community members. Artist biography and downloadable biography reflect the clarified timeline.

Official TOKLAB wordmark and symbol are in assets/brand/. Only transparent outer padding was trimmed from supplied PNGs; the white artwork is unchanged. Source logos and PDF remain at the project root; the presentation is available through an explicit download link (63.3 MB) and is not loaded automatically.

The 6 November 2026 Club Edition at Santuário LX (formerly Kremlin) is featured above the earlier three editions. Its venue and description as TOKLAB’s most successful edition yet were supplied directly by the artist’s collaborator after the presentation was added; no attendance figure is assumed.

Original releases: a secondary Spotify artist link beneath the SoundCloud area, using the artist URL supplied by the user. No Spotify embed, autoplay or track-level claims; DJ sets retain visual priority.

Original releases now use a compact click-to-load Spotify artist embed beneath SoundCloud within The Sound section. Spotify supplies the track list; the direct profile link remains visible. No autoplay is requested.
