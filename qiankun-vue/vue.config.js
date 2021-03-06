const path = require('path');
const packageName = require('./package.json').name;
module.exports = {
    devServer:{
        port:'5001',
        // 关闭主机检查，使微应用可以被 fetch
        disableHostCheck: true,
        headers:{
            "Access-Control-Allow-Origin":"*"
        }
    },
    configureWebpack:{
        resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
            }
        },
        output:{
            library:`${packageName}`,
            libraryTarget:'umd',
            // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
            jsonpFunction: `webpackJsonp_${packageName}`,
        }
    }
}