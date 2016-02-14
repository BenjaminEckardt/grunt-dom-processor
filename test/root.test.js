'use strict';
var grunt = require('grunt');
var path = require('path');
module.exports = {
  base: function (test) {
    var files = [
      'base.html'
    ];

    test.expect(files.length);

    files.forEach(function (file) {
      var expected = grunt.file.read(path.join('test', 'expected', file));
      var actual = grunt.file.read(path.join('tmp', file));
      test.equal(expected, actual);
    });

    test.done();
  }
};
