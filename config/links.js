// https://github.com/segmentio/metalsmith-permalinks
module.exports = {
  // Default link mapping: ./pages/about.html -> domain.com/about/
  // You can remap links without changing filenames,
  // eg. domain.com/about/ -> domain.com/about-me/
  // by specifying a `parentDir` in the page's front-matter.
  pattern: ':parentDir'
}
