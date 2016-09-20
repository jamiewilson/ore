var site = require('../site')

var layouts = '../' + site.layoutsDir + '/**/*'
var pages = '../' + site.pagesDir + '/**/*'
var assets = '../' + site.assetsDir + '/**/*'

// https://github.com/FWeinb/metalsmith-watch
module.exports = {
  paths: {
    // use `**/*` to rewrite only changed files. Or `true` rebuilds all files
    [layouts]: '**/*',
    [pages]: '**/*',
    [assets]: '**/*'
  },
  // Disabled logs to let Browsersync do it
  log: (options) => {}
}
