//  Start, Steps, and Build Error Messages
var chalk = require('chalk');
var browsersync = require('browser-sync').create();
var config = { browsersync: require('./browsersync') };

module.exports = function(error) {
  browsersync.init(config.browsersync);
  if (error) {
    // Reports any build errors on initial build
    // TODO: throw after a rebuild as well
    console.log(chalk.magenta.underline('\nOops, there was a problem!'));
    console.log(error.message);
  }
}
