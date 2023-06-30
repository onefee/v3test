const { defineConfig } = require('@vue/cli-service');
const v = require('./conf.json').version;
let externals = {};
let cdn = { js: ['https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js'] };
const prod = process.env.NODE_ENV === 'production'; // 判断是否是生产环境
if (prod) {
  externals = {
    /**
     * externals 对象属性解析
     * 格式'包名' : '在项目中引入的名字'
     */
    vue: 'Vue',
    xlsx: 'XLSX',
  };

  const js = [
    'https://unpkg.com/vue@3.2.13/dist/vue.runtime.global.prod.js',
    'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.6/vue-router.global.prod.min.js',
  ];
  cdn.js.push(...js);
}

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
      arg[0].cdn = cdn;
      return arg;
    });
  },
  configureWebpack: {
    externals: externals,
  },
});
