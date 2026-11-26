# Minseo Portfolio

From this directory, run `npm ci`, `npm run lint`, and `npm run build`.
The build requires Node.js 24, Git, and tar. Run `npm run dev` for a local
preview at the `/MinseoPortfolio2026/` base path. Rebuild or restart the
preview after editing the chapter.

The lavender version is preserved from GitHub Pages commit `239874f`.
That commit contains the bundled site and its assets. The React source in
`src/` is from the earlier portfolio and remains type checked. The Pages
build uses the pinned lavender artifact and extends its existing Activities
card list and chapter dialog. If the pinned commit is missing locally, the
build fetches the Pages branch to retrieve it. It checks each integration
point before emitting the site into `dist/`.

Edit the Research Assistant content in `research/chapter.html` and its
styles in `research/chapter.css`. Each literature area has its own article
and can be edited or removed independently. Add future assignments as
articles in Current Research Focus, with any assignment-specific dates and
mentors recorded there. The position timeline describes the overall role.

Run `npm run deploy` after a successful build to publish `dist/` to GitHub
Pages when authorized.
