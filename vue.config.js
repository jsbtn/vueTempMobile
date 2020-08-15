module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    open: true,
    hotOnly: false,
    proxy: {
      "/saoma": {
        target: "http://218.244.149.172:8090",
        changOrigin: true,
        pathRewrite: {
          "^/saoma": "/park"
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false, 
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100, 
            exclude: /(node_module)/, 
            mediaQuery: false, 
            minPixelValue: 11
          }),
        ]
      }
    }
  },
  // 配置es6 兼容
  chainWebpack: config => {
    config.entry("main").add("babel-polyfill"); 
  }
};