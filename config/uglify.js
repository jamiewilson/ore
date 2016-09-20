// https://github.com/ksmithut/metalsmith-uglify
module.exports = {
  // concat and compress
  concat: `js/main.js`,
  // remove original unminified files
  removeOriginal: true,
  // create a map file
  sourceMap: true
}
