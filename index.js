'use strict';

const errorSound = '\u0007';

class WebpackErrorSound {
    apply(compiler) {
        compiler.hooks.done.tap('WebpackErrorSound', (stats) => {
            if (stats.compilation.errors.length > 0) {
                console.log(errorSound);
            }
        });
    }
}

module.exports = WebpackErrorSound;