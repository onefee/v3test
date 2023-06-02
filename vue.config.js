const { defineConfig } = require('@vue/cli-service');
const v = require('./conf.json').version;

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  /**
   * 修改插件的配置
   * @param config
   */
  chainWebpack: (config) => {
    config.plugin('html').tap((arg) => {
      arg[0].version = v;
      return arg;
    });
  },
});
