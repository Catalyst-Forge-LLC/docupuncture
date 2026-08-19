# docupuncture.dev

Public site for [Docupuncture](https://github.com/Catalyst-Forge-LLC/docupuncture), built with
[FilePress](https://getfilepress.com).

```bash
pnpm install
pnpm dev
pnpm build    # → build/
```

From the package root: `pnpm site:dev`, `pnpm site:build`, `pnpm ship`.

If [LocalBerth](https://www.npmjs.com/package/localberth) is installed, this site stays on **5188** as `docupuncture-site`.

## Deploy (Cloudflare Pages)

**Use one pipeline only.** Dual deploys overwrite each other when asset hashes
disagree.

```bash
pnpm ship
# = pnpm build && wrangler pages deploy build --project-name=docupuncture
```

Then attach **docupuncture.dev** in the Cloudflare dashboard.

### Git-connected Pages

| Setting | Value |
| --- | --- |
| Root directory | `site` |
| Build command | `pnpm install && pnpm build` |
| Output directory | `build` |
| Node | 20+ |
