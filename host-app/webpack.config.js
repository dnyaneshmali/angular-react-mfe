const { ModuleFederationPlugin } = require('webpack').container;
const { shareAll } = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "hostApp",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        "login": "http://localhost:4201/remoteEntry.js",
        "dashboard": "http://localhost:4202/remoteEntry.js",
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
        "zone.js": { singleton: true, requiredVersion: 'auto', eager: true },
      },
    }),
  ],
};
