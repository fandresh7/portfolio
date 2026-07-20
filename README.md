# Andrés Hortúa — Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), available in Spanish and English.

🔗 **Live site:** [andreshortua.com](https://andreshortua.com)

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/     # Hero, Experience, Projects, Challenges, Contact, Header, Footer
│   ├── data/            # Content, routes and tech icons
│   ├── layouts/
│   ├── pages/           # Spanish routes (default locale)
│   │   └── en/          # English routes
│   └── styles/
└── astro.config.mjs
```

Routing uses Astro's built-in [i18n](https://docs.astro.build/en/guides/internationalization/): Spanish is the default locale (no prefix), English pages live under `/en/`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installs dependencies                          |
| `npm run dev`       | Starts local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`             |
| `npm run preview`   | Preview the build locally, before deploying    |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## Deployment

Deployed on [Netlify](https://www.netlify.com), connected to this GitHub repo, with a custom domain (`andreshortua.com`) and automatic HTTPS via Let's Encrypt.
