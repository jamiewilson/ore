// Metalsmith Plugins

var metalsmith = require('metalsmith')
var assets     = require('metalsmith-assets')
var inplace    = require('metalsmith-in-place')
var layouts    = require('metalsmith-layouts')
var links      = require('metalsmith-permalinks')
var sass       = require('metalsmith-sense-sass')
var uglify     = require('metalsmith-uglify')
var watch      = require('metalsmith-watch')

// Build options and site config

var serve      = require('./build').serve
var clean      = require('./build').clean
var production = require('./build').production
var errors     = require('./build').errors

var config = {
  site:    require('./site'),
  assets:  require('./assets'),
  layouts: require('./layouts'),
  links:   require('./links'),
  sass:    require('./sass'),
  uglify:  require('./uglify'),
  watch:   require('./watch')
}

// Build pipeline

var ore = metalsmith(__dirname)
  .clean(clean || production)
  .metadata(config.site)
  .source(config.site.pagesDir)
  .destination(config.site.buildDir)
  .use(links(config.links))
  .use(layouts(config.layouts))
  .use(inplace(config.layouts))
  .use(assets(config.assets))
  .use(sass(config.sass))
  .use(uglify(config.uglify));

(production) ? ore.build(errors) : ore.use(watch(config.watch)).build(serve)
