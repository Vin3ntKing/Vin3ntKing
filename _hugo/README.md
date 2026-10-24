# Personal website · Hugo

Local preview: `./preview.sh`, then open http://localhost:1313/.
The script uses installed Hugo or the workspace copy of Hugo 0.145.0.

Build: `hugo --minify`. Production URL: https://vin3ntking.github.io/Vin3ntKing/.

- `data/home.toml`: introduction, companies, projects, About.
- `layouts/partials/work-detail.html`: experience descriptions and buttons.
- `assets/work-eggs.js`: experience popup copy and interactions.
- `content/notes/`: English notes, reviewed for publication. Dates show the original month; the first day is only a sorting value.
- `layouts/index.html`: homepage, photographs and personal links.
- `assets/style.css`: typography and responsive layout.
- `static/`: personal photographs, official company icons, and self-hosted fonts with licenses.

CV and resume files are deliberately excluded. Local previews use noindex; production builds do not.

The `personal_pages` branch serves generated files at its root. Hugo source is retained under `_hugo/`; `.nojekyll` prevents Jekyll processing. The previous site remains available in Git history. To update: build the source, review the generated output, and commit the output and updated source together. Never deploy the contents of this workspace indiscriminately.
