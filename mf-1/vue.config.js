const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const deps = require('./package.json').dependencies;

const { ModuleFederationPlugin } = webpack.container;

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: 'http://sw-ui.uad.jd.com:81/',
  productionSourceMap: false,
  transpileDependencies: true,
  // pluginOptions: {
  //   webpackBundleAnalyzer: {
  //     analyzerMode: true,
  //   },
  // },
  configureWebpack: (config) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './AboutView': './src/views/AboutView',
        },
        shared: {
          vue: {
            singleton: true,
          },
          'core-js': {
            singleton: true,
          },
          'vue-router': {
            singleton: true,
          },
          vuex: {
            singleton: true,
          },
        },
      })
    );
  },
});
