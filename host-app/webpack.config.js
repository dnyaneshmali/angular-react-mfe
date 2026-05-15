const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "host",
  },
  plugins: [
    new ModuleFederationPlugin({
    }),
  ],
};
