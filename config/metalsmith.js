var metalsmith   = require("metalsmith");
var assets       = require("metalsmith-assets");
var layouts      = require("metalsmith-layouts");
var inplace      = require("metalsmith-in-place");
var prefix       = require("metalsmith-autoprefixer");
var sass         = require("metalsmith-sass");
var uglify       = require("metalsmith-uglify");
var watch        = require("metalsmith-watch");

//========================
//  Log and config files
//========================

var config = {
  assets:      require("./assets"),
  serve:       require("./serve"),
  layouts:     require("./layouts"),
  sass:        require("./sass"),
  uglify:      require("./uglify"),
  watch:       require("./watch")
};

//=======================================
//  Build pipeline - order does matter!
//=======================================

metalsmith(__dirname)
  .clean(true)
  .source("../pages")
  .destination("../build")
  .use(layouts(config.layouts))
  .use(inplace(config.layouts))
  .use(assets(config.assets))
  .use(sass(config.sass))
  .use(prefix())
  .use(uglify(config.uglify))
  .use(watch(config.watch))
  .build(config.serve);
