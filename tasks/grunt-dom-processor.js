'use strict';
const TASK_NAME = 'dom-processor';
const DomProcessor = require('dom-processor');

module.exports = function (grunt) {
  let log = grunt.log;
  let file = grunt.file;

  let gruntDomProcessor = function () {
    grunt.config.requires(TASK_NAME);

    let fileCount = 0;

    let configLoaderPath = this.data.configLoader;
    let configLoader = require(configLoaderPath);
    let domProcessor = new DomProcessor(configLoader);

    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(srcPath) {
        log.debug('processing file: ' + srcPath);
        let html = domProcessor.process(grunt.file.read(srcPath), srcPath);

        log.debug('output; \n' + html);
        file.write(filePair.dest || srcPath, html);
      });

      fileCount += filePair.src.length;
    });

    log.ok('processed ' + fileCount + (fileCount === 1 ? ' file.' : ' files.'));
  };

  grunt.registerMultiTask(TASK_NAME, 'Grunt task for dom-processor', gruntDomProcessor);
};
