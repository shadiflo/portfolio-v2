# shadi.dev portfolio

A static portfolio built with Astro and Tailwind CSS. The homepage presents Florin's profile, about section, and projects. Existing blog posts remain available at /blog/.

## Local development

Install dependencies and start Astro:

    pnpm install
    pnpm dev

Create a production build:

    pnpm build

Profile copy and links live in src/data/profile.ts. Project descriptions, links, technologies, and featured project selection live in src/data/projects.ts. Static project artwork is in public/.

## Deploy to Cloudflare Workers

The Wrangler configuration serves Astro's static dist/ output as Workers Static Assets. Build and deploy with:

    pnpm run deploy:workers

On the first run, Wrangler may ask you to authenticate with Cloudflare. To preview the built site locally with Wrangler:

    pnpm build
    pnpm dlx wrangler dev

After the Worker is live, attach shadi.dev as a custom domain in Cloudflare. Keep the current VPS site online until the Worker and domain both serve the new site correctly. Then disable only the shadi.dev Nginx site configuration; leave the Nginx service running if it serves other sites. Do not change DNS until the Cloudflare deployment is ready.
