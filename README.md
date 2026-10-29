# Plushie Studio website

Buildless landing page for **https://plushiestudio.app/**. Version 0.1.2.
The app icon is the existing production icon; DM Sans is bundled under its OFL.
The page makes no requests to third-party font or analytics services.
The system color preference selects the light or dark palette, including the
browser theme color, CTA, ground grid and icon depth. The production icon keeps
its original colors. No theme selector or additional call to action is added.

## Preview

From the app repository:

```sh
python3 -m http.server 4193 --bind 127.0.0.1 --directory website
```

## Hosting

Public deployment repository: https://github.com/asdftq/plushiestudio.app
Only this directory belongs in the public repository. The application repository
and its assets outside this directory stay private.

GitHub Pages serves the public repository's root. `CNAME` binds
`plushiestudio.app`. Cloudflare DNS points the apex to the four GitHub Pages A
addresses. HTTPS is enforced in the repository's Pages settings.

The Discord CTA uses https://discord.gg/Yp2xXuAgBa, a permanent, unlimited-use
invite to `welcome`. App testing remains invitation only. For later changes,
bump this package's version, sync this directory to the public repository, and
check the page and CTA before publishing. Pages publishes the `main` branch root.
