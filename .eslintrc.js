const path = require('path');

module.exports = {
  globals: {
    it: true,
    describe: true,
    $: true,
  },
  extends: [
    'matheusvellone-base/react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'config', 'webpack.config.dev.js'),
      },
    },
  },
};
