const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const deps = require('./package.json').dependencies;

const { ModuleFederationPlugin } = webpack.container;

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // pluginOptions: {
  //   webpackBundleAnalyzer: {
  //     analyzerMode: false,
  //   },
  // },
  configureWebpack: (config) => {
    config.cache = {
      type: 'filesystem', //将缓存类型设置为文件系统，默认为memory
      buildDependencies: {
        config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
      },
    };
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          app1: 'app1@http://sw-ui.uad.jd.com:81/remoteEntry.js',
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
