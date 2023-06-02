const { defineConfig } = require('@vue/cli-service');
const v = require('./conf.json').version;

module.exports = defineConfig({
  transpileDependencies: true,
  /**
   * 修改插件的配置
   * @param config
   */
  chainWebpack: (config) => {
    config.plugin('html').tap((arg) => {
      console.log('vers', v);
      arg[0].version = v;
      return arg;
    });
  },
});
