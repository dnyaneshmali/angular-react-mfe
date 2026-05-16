const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'login',
  exposes: {
    './Component': './src/app/login/login.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: false }),
  },
});
