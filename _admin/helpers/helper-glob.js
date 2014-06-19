(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt  = require('grunt');

    var globFiles = function(src) {
      var content = grunt.file.expand(src).map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed));
      return content;
    };

    /*
     * Glob: reads in data from a markdown file, and uses the first heading
     * as a section heading, and then copies the rest of the content inline.
     * Usage: {{{ glob [file] }}
     */
    Handlebars.registerHelper("glob", function(src) {
      var content = globFiles(src);
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);