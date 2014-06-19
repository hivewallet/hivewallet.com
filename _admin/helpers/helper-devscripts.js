(function() {
  module.exports.register = function(Handlebars, options) {

    var grunt  = require('grunt');
    path = require('path');

    /*
     * Function for using minimatch patterns to grab the files and render a list
     */
    var devscripts = function(src) {
      var content;
      return content = grunt.file.expand(src).map(function(path) {
        return {path: path};
      }).map(function(obj) {

        var filename = path.basename(obj.path);
        // var folderpath = src.replace('*.js', '');
        return '<script type="text/javascript" src="/assets/js/' + filename + '"></script>\n';
      }).join(grunt.util.normalizelf(grunt.util.linefeed));
    };

    /*
     * devscript helper
     */
    Handlebars.registerHelper("devscripts", function(src) {
      return new Handlebars.SafeString(devscripts(src));
    });

  };
}).call(this);