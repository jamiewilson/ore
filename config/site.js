var site = require('../site')

module.exports = {
  assetsDir: '../' + site.assetsDir,
  buildDir: '../' + site.buildDir,
  defaultLayout: site.defaultLayout,
  layoutsDir: '../' + site.layoutsDir,
  pagesDir: '../' + site.pagesDir,
  siteDescription: site.siteDescription,
  siteName: site.siteName,
  siteTitle: site.siteTitle,
  templateEngine: site.templateEngine
}
