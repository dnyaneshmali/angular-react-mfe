const { ModuleFederationPlugin } = require('webpack').container;
const { shareAll } = require('@angular-architects/module-federation/webpack');
const path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "login",
    scriptType: "text/javascript",
    library: { type: "var", name: "login" },
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
        "@angular/core": { singleton: true, strictVersion: false },
        "@angular/common": { singleton: true, strictVersion: false },
        "@angular/router": { singleton: true, strictVersion: false },
      },
    }),
  ],
};
