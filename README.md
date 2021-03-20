<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="100" height="100" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

![npm](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
![node](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)

[![stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/dominictarr/stability#stable)


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
```
yarn add -D webpack-error-sound
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
The plugin was designed for personal use

## License
#### [MIT](./LICENSE)