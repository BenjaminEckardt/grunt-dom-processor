'use strict';
var fs = require('fs');
var path = require('path');

function buildTextFilePath(filePath) {
  return path.join(path.dirname(filePath), path.basename(filePath, '.html') + '.json');
}

module.exports = {
  load: function (htmlFilePath) {
    var textContent = fs.readFileSync(buildTextFilePath(htmlFilePath), 'utf8');
    var content = JSON.parse(textContent);
    return [{
      selector: content.selector,
      replace: function () {
        return '<span></span>';
      }
    }];
  }
};
