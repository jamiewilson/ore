var site = require('../site')

// http://www.browsersync.io/docs/options/
module.exports = {
  // the directory of our build
  server: site.buildDir,
  // Use projectName for terminal logs
  logPrefix: site.siteName,
  // Disable the Browsersync UI
  ui: false,
  // don't show Browsersync notifications in-browser
  notify: false,
  // Don't mirror scrolling, clicks by defualt
  ghostMode: false,
  // Delay reload to ensure enough time for rebuilds
  reloadDelay: 200,
  // Terminal logs: either "info", "debug", "warn", or "silent"
  logLevel: 'info',
  // Watch these files for changes
  files: [
    site.layoutsDir + '/**/*',
    site.pagesDir + '/**/*',
    site.assetsDir + '/**/*'
  ]
}
