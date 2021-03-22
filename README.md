<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="100" height="100" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![npm][webpack]][webpack-url]

# webpack-error-sound
 Webpack plugin to play a system bell sound on compilation error

## Features
- 0 dependencies
- lightweight
- webpack 5 compatible

## Installation
```    
npm i -D webpack-error-sound
```

## Usage
in your `webpack.config.js` import a plugin and include it to plugins array:
```javascript
const WebpackErrorSound = require('webpack-error-sound');

module.exports = {

    plugins: [
        new WebpackErrorSound()
    ]

}
```

## Support
The plugin was designed for personal use.
Developed for webpack 5, not tested on previous versions

## License
#### [MIT](./LICENSE)


[npm]: https://img.shields.io/npm/v/webpack-error-sound.svg
[npm-url]: https://npmjs.com/package/webpack-error-sound
[webpack]: https://img.shields.io/npm/v/webpack?color=%231e72b3&label=webpack
[webpack-url]: https://www.npmjs.com/package/webpack