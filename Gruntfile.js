module.exports = function(grunt) {
// Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'script/main.min.js': ['script/script.js']
        }
      }
    },

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
        files: ['css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        },
      },
    },

  });
  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
