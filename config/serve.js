//  Serve and report build errors
var browsersync = require('browser-sync').create();
var config = { browsersync: require('./browsersync') };

module.exports = function(error) {
  browsersync.init(config.browsersync);
  if (error) {
    // Reports any build errors on initial build
    console.log('\nOops, there was a problem!');
    console.log(error.message);
  }
}
