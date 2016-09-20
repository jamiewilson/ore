var site = require('../site')

module.exports = {
  siteName:        site.name,
  siteTitle:       site.title,
  siteDescription: site.description,
  assetsDir:       site.assetsDir,
  layoutsDir:      site.layoutsDir,
  pagesDir:        site.pagesDir,
  defaultLayout:   site.defaultLayout,
  templateEngine:  site.templateEngine,
  buildDir:        site.buildDir
}
