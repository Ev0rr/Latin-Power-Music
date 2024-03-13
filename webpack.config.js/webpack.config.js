const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['gsap'] = path.resolve(__dirname, 'node_modules/gsap/dist/gsap.min.js');
    return config;
  },
};
