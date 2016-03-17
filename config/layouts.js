// https://github.com/superwolff/metalsmith-layouts
module.exports = {
  // The engine that will render your layouts
  // https://github.com/tj/consolidate.js#supported-template-engines
  engine: "handlebars",
  // Where to look for the layouts
  directory: "../layouts",
  // The default layout to use
  default: "page.html"
};
