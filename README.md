# dreadlabs.de

A personal portfolio / resume website.

## Project goals

* rewrite with a non-Node.js static site generator
* use Tailwind CSS instead of Google Material

## Requirements

* Homebrew
* hugo (v0.97.3)
* Node.js w/ npm (v14+) :frowning:
* Google Fonts [Roboto, Roboto Slab, Source Sans Pro](https://google-webfonts-helper.herokuapp.com/fonts)

### Setup

#### macOS

    brew install hugo

### Run

    hugo server -D

### Build

- hugo build

      rm -rf public/*
      npm install
      hugo -D

- hugo build (prod)

      rm -rf public/*
      npm install
      HUGO_BASEURL=https://dreadlabs.de/ hugo -D

- tailwind build (generated css + asset references etc)

      npx tailwindcss -i ./assets/main.css -o ./public/main.css [--minify]

- run

      docker-compose -f docker-compose.local.yml up

## Decisions

### Decision: Compensation of fixed header navbar height at jump anchors

The following tailwindcss selectors are used at jump anchors:

    target:before:block target:before:content-[''] target:before:h-16 target:before:-mt-16

The header navbar has a height of 64px. The implemented solution was inspired
by this [answer at StackOverflow](https://stackoverflow.com/a/48594022).

### Decision: Response image generation

In dependency of the context the image is used, the following guide should help
to generate the best list of images for a responsive user experience:

- observe how much "slot" width for the image will be available in the small (sm),
  medium (md) and large (lg) breakpoints
- define a sensible set of images for this ranges; keep an eye upon "lean period"
  ranges (e.g. up until reaching the medium breakpoint)
- if specific (grid-) layouts are applied for each breakpoint, specify their
  approximate view port width in the "sizes" attribute of the `<img />` tag
- use `min-width` media condition and start with greatest (large) breakpoint
  from top to bottom
- default to `100vw` as the very last `sizes` value as the default for mobile
  targeted environments

Read [this article](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/), 
if you feel the need to refresh your knowledge about responsive images.

### Decision: Switch to local build environment for tailwindcss + daisyUI

As the CDN usage for tailwind and daisyUI is not recommended for production usage,
tailwindcss and daisyUI will be used via local dev env installation.
These are the steps performed to migrate from CDN:

    > npm install -D tailwindcss
    > du -sh node_modules/
    < 10M    node_modules/
    > npx tailwindcss init
    # ...configuration...
    > npm i -D daisyui
    > du -sh node_modules/
    < 11M    node_modules/

### Decision: daisyUI overrides `neutral` colors of tailwindcss v3.0+

This [GitHub issue](https://github.com/saadeghi/daisyui/issues/683) explains,
why the `neutral` color palette entry of tailwindcss is not available if daisyUI
is in use.

Therefore, the following daisyUI color palette replacements where chosen:
(tailwindcss -> daisyUi)

* `neutral-100` -> `base-200`
* `neutral-400` -> `base-300`

This issue was determined, when building the production CSS assets and the
tailwindcss `*-neutral-*` styles weren't applied.

### Decision: Close daisyUI drawer when clicked on a jump-to anchor

The following inline event handler is added to all links in the drawer menu which
point to anchors on the same page:

    onclick="document.getElementById('my-drawer').click()"

As the daisyUI drawer does not have any API to accomplish this, this approach
seems to be the most pragmatic one.

### Decision: Use self-hosted Google Fonts

Currently, a wave of cease-and-desist letters is rolling over Germany. This may
affect website providers when loading Google Fonts from Google servers. To be
spared from this, the fonts and stylesheets were compiled and generated using 
[google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) and
are included in the VCS of this project.

The font packages are compiled by using the _latin_ charset only. The used 
styles are constrained to the _regular_, _italic_, _700_ and _700italic_ if
available. For CSS generation the "Best Support" option was used.

## TODOs

- [ ] integrate ServiceWorker (see https://developers.google.com/web/tools/workbox)
- [ ] re-add `.webmanifest`
- [ ] use [Web Font Loader](https://github.com/typekit/webfontloader)
- [ ] use zopfli / gzip compression on assets
- [ ] implement blurred / placeholder and lazy loading for images (above the fold)
