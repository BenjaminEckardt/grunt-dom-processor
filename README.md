# grunt-dom-processor [![Build Status](https://travis-ci.org/BenjaminEckardt/grunt-dom-processor.svg?branch=master)](https://travis-ci.org/BenjaminEckardt/grunt-dom-processor)
> Transform HTML-Files.

## Installation
```sh
npm install grunt-dom-processor --save-dev
```

## Example
Simple example for processing all `html`-files in `src`-folder and writing results to `dist`-folder:
```js
'dom-processor': {
  main: {
    configLoader: configLoader,
    files: [{
      src: ['**/*.html'],
      dest: 'dist',
      expand: true,
      cwd: 'src'
    }]
  }
}
```
For the usage of `configLoader` see [this](https://github.com/BenjaminEckardt/dom-processor#config-loader)

## License
MIT © [Benjamin Eckardt](https://github.com/BenjaminEckardt)
