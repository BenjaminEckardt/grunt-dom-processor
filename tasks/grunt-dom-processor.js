'use strict';
var TASK_NAME = 'dom-processor';
var DomProcessor = require('dom-processor');

module.exports = function (grunt) {
  var log = grunt.log;
  var file = grunt.file;

  var gruntDomProcessor = function () {
    grunt.config.requires(TASK_NAME);

    var fileCount = 0;

    var domProcessor = new DomProcessor(this.data.configLoader);

    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(srcPath) {
        log.debug('processing file: ' + srcPath);
        var html = domProcessor.process(grunt.file.read(srcPath), srcPath);

        log.debug('output; \n' + html);
        file.write(filePair.dest || srcPath, html);
      });

      fileCount += filePair.src.length;
    });

    log.ok('processed ' + fileCount + (fileCount === 1 ? ' file.' : ' files.'));
  };

  grunt.registerMultiTask(TASK_NAME, 'Grunt task for dom-processor', gruntDomProcessor);
};
