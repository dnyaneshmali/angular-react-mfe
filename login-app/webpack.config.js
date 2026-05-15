const { ModuleFederationPlugin } = require('webpack').container;
const { shareAll } = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "login",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './src/app/login/login.component.ts',
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
        "zone.js": { singleton: true, requiredVersion: 'auto', eager: true },
      },
    }),
  ],
};
