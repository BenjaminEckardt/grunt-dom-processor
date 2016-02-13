'use strict';
const grunt = require('grunt');
const path = require('path');
module.exports = {
  base: function (test) {
    let files = [
      'base.html'
    ];

    test.expect(files.length);

    files.forEach(function (file) {
      let expected = grunt.file.read(path.join('test', 'expected', file));
      let actual = grunt.file.read(path.join('tmp', file));
      test.equal(expected, actual);
    });

    test.done();
  }
};
