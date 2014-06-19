(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt  = require('grunt');
    path = require('path');

    /*
     * Function for using minimatch patterns to grab the files and render a list
     */
    var tempglob = function(src) {
      var content;
      return content = grunt.file.expand(src).map(function(path) {
        return {path: path};
      }).map(function(obj) {

        var filecontent = globFiles(obj.path);
        var filename = path.basename(obj.path, '.hbs').replace('helper-', '');
        return '<div class="pl__atom"><h2 class="pl__atom__title">' + filename + '</h2><div class="pl__atom__content">' + filecontent + '</div></div>\n';
      }).join(grunt.util.normalizelf(grunt.util.linefeed));
    };

    var globFiles = function(src) {
      var content = grunt.file.expand(src).map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed));
      return content;
    };


    /*
     * tempglob helper
     */
    Handlebars.registerHelper("tempglob", function(src) {
      return new Handlebars.SafeString(tempglob(src));
    });

  };
}).call(this);