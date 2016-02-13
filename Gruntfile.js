'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // linter
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // clean test working directory
    clean: {
      tests: ['tmp']
    },

    // running tests
    nodeunit: {
      tests: ['test/*.test.js']
    },

    // test-configurations for dom-processor
    'dom-processor': {
      base: {
        configLoader: __dirname + '/test/input/base/config-loader',
        files: [{
          src: ['**/*.html'],
          dest: 'tmp',
          expand: true,
          cwd: 'test/input/base'
        }]
      }
    },
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', [ 'jshint', 'clean', 'dom-processor', 'nodeunit' ]);
};
