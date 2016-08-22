# Ore
#### A small [Metalsmith](http://metalsmith.io) workflow for quickly throwing together little web things.

It uses [Browsersync](http://browsersync.io) to autoreload on file changes, synchronize scrolls and clicks between browsers, and provide a [public URL](http://localtunnel.me) for easy cross-device development. It compiles, [autoprefixes](https://github.com/postcss/autoprefixer), and minifies [SCSS](http://sass-lang.com/). Concatenates and uglifies JS. It has a default layout and page using [Handlebars](http://handlebarsjs.com).

## Installation

**1. Make sure [Node](http://nodejs.org) and [npm](https://docs.npmjs.com/getting-started/installing-node) are installed.**

**2. Clone this repo into a new empty project folder:**

```
git clone https://github.com/jamiewilson/ore.git <folder-name>
```

**3. Install the dependencies:**

```
npm install
```

## Usage

**Build your site and launch the dev server:**

```
npm start
```

**To rebuild a clean site with each file change:**

```
npm run clean
```

**Build without launching the dev server:**

```
npm run production
```

_Et voilà._

## Change your site metadata

```js
{
  // Sitename used in console messages
  "siteName": "ore",
  // Used for <title> tag in layouts/page.html
  "siteTitle": "New Site",
  // Used for meta description tag in layouts/page.html
  "siteDescription": "Your new site description.",
  // Location of your site's main pages
  "pagesDir": "pages",
  // Folder in which to build your site
  "buildDir": "build",
  // location of your CSS, JS, and images
  "assetsDir": "assets",
  // Where to look for the layouts
  "layoutsDir": "layouts",
  // The default layout to use if none is specified in front-matter
  "defaultLayout": "page.html",
  // The engine that will render your layouts
  // https://github.com/tj/consolidate.js#supported-template-engines
  "templateEngine": "handlebars"
}
```

## Complete list of plugins/packages:

**[Browsersync](https://github.com/Browsersync/browser-sync)**  
Keep multiple browsers & devices in sync when building websites.

**[Handlebars](http://handlebarsjs.com/)**  
Clean logicless templates based on the [Mustache Templating Language](http://mustache.github.com/).

**[Metalsmith](http://metalsmith.io)**  
An extremely simple, pluggable static site generator.

**[metalsmith-assets](https://github.com/treygriffith/metalsmith-assets)**  
Allows you to put your css, img, and js assets in the `/assets` folder.

**[metalsmith-in-place](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to use Handlebars in your pages files.

**[metalsmith-layouts](https://github.com/superwolff/metalsmith-in-place)**  
Allows you to apply layouts, like the default `layouts/page.html`, to your pages.

**[metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks)**  
Converts about.html into about/index.html, so that `localhost:3000/about/` renders without having to add `.html` to it.

**[metalsmith-sense-sass](https://github.com/rstacruz/metalsmith-sense-sass)**  
Compiles SCSS and autoprefixes css.

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
