'use strict';
var baseConfigLoader = require('./test/setup/base/config-loader');
var loadingConfigLoader = require('./test/setup/loading/config-loader');

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
        configLoader: baseConfigLoader,
        files: [{
          src: ['**/*.html'],
          dest: 'tmp',
          expand: true,
          cwd: 'test/setup/base'
        }]
      },
      loading: {
        configLoader: loadingConfigLoader,
        files: [{
          src: ['**/*.html'],
          dest: 'tmp',
          expand: true,
          cwd: 'test/setup/loading'
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
