const path = require("path");
const packageName = require('./package.json').name;

module.exports = {
  webpack: (config) => {
    // 解决主应用接入后会挂掉的问题：https://github.com/umijs/qiankun/issues/340
    config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.library = `${packageName}`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    config.output.libraryTarget = "umd";
    // 按需加载相关，设置为 webpackJsonp_packageName 即可
    config.output.jsonpFunction = `webpackJsonp_${packageName}`;
    config.output.globalObject = "window";
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
    
  },

  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true;
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // 配置 history 模式
      config.historyApiFallback = true;
      return config;
    };
  },
};
