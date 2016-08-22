//  Serve and report build errors
var browsersync = require('browser-sync').create()
var config = { browsersync: require('./browsersync') }

module.exports = {
  // if NODE_ENV=clean then return true
  clean: ((process.env.NODE_ENV || '').trim().toLowerCase() === 'clean'),
  // if NODE_ENV=production then return true
  production: ((process.env.NODE_ENV || '').trim().toLowerCase() === 'production'),
  // if errors, throw error and stop build
  errors: function (err) { if (err) throw err },
  // Launch Browsersync server after build is done
  serve: function (err) {
    browsersync.init(config.browsersync)
    if (err) {
      // Reports any build errors on initial build
      // TODO: throw after a rebuild as well
      console.log('\nOops, there was a problem!')
      console.log(err.message)
    }
  }
}
