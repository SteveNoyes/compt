module.exports = function(grunt) {
// Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.css': ['css/reset.css', 'css/style.css']
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        },
      },
    },

  });
  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
