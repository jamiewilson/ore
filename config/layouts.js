var site = require('../site')

// https://github.com/superwolff/metalsmith-layouts
module.exports = {
  // The engine that will render your layouts
  // https://github.com/tj/consolidate.js#supported-template-engines
  engine: site.templateEngine,
  // Where to look for the layouts
  directory: '../' + site.layoutsDir,
  // The default layout to use
  default: site.defaultLayout
}
