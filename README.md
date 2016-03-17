# Ore
#### A small [Metalsmith](http://metalsmith.io) workflow for quickly throwing together little web things.

It uses [Browsersync](http://browsersync.io) to autoreload on file changes, synchronize scrolls and clicks between browsers, and provide a [public URL](http://localtunnel.me) for easy cross-device development. It compiles, [autoprefixes](https://github.com/postcss/autoprefixer), and minifies [SCSS](http://sass-lang.com/). Concatenates and uglifies JS. It has a default layout and page using [Handlebars](http://handlebarsjs.com). Easily deploy your project with a custom domain for free using [Surge](https://surge.sh).

## Installation

**1. Make sure [Node](http://nodejs.org) and [npm](https://docs.npmjs.com/getting-started/installing-node) are installed.**

**2. Clone this repo into a new empty project folder:**

```
git clone https://github.com/jamiewilson/ore.git <folder-name>
```

_Or manually install by [downloading the ZIP](https://github.com/jamiewilson/ore/archive/master.zip)._

**3. Install the dependencies and create a global symlink with:**

```
npm install && npm link
```

## Usage

**1. Build your site and launch the dev server with:**

```
ore
```

**2. Deploy your `build` directory with [Surge](https://surge.sh/):**

```
surge build
```

_Et voilà._

## Complete list of plugins/packages:

**[Metalsmith](http://metalsmith.io)**  
An extremely simple, pluggable static site generator.

**[Browsersync](https://github.com/Browsersync/browser-sync)**  
Keep multiple browsers & devices in sync when building websites.

**[Handlebars](http://handlebarsjs.com/)**  
Clean logicless templates based on the [Mustache Templating Language](http://mustache.github.com/).

**[Surge](https://github.com/sintaxi/surge)**  
Publish web apps to a CDN with a single command and no setup required.

### Metalsmith Plugins

**[metalsmith-assets](https://github.com/treygriffith/metalsmith-assets)**  
Allows you to put your css, img, and js assets in the `/assets` folder.

**[metalsmith-autoprefixer](https://github.com/esundahl/metalsmith-autoprefixer)**  
Automatically add vendor prefixes to CSS.

**[metalsmith-layouts](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to apply layouts, like the default `layouts/page.html`, to your pages.

**[metalsmith-in-place](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to use Handlebars in your pages files.

**[metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks)**  
Converts about.html into about/index.html, so that `localhost:3000/about/` renders without having to add `.html` to it.

**[metalsmith-sass](https://github.com/stevenschobert/metalsmith-sass)**  
Convert Sass/SCSS syntax to CSS.

**[metalsmith-uglify](https://github.com/ksmithut/metalsmith-uglify)**  
Concats/uglifies/minifies your JavaScript files.

**[metalsmith-watch](https://github.com/FWeinb/metalsmith-watch)**  
Watches for a changes and triggers rebuilds.

## Updating
To fetch and merge the latest version of Statt without losing any customizations you've made, and to also avoid having to deal with any potential merge conflicts, stash your changes, pull, rebase, and pop your changes back on top:

```
git stash
git pull --rebase
git stash pop
```
