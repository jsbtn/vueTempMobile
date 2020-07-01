module.exports = {
  publicPath: './',
  // devServer: {
  //   port: 8080,
  //   open: true,
  //   hotOnly: false,
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1",
  //       changOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/api"
  //       }
  //     },
  //   },
  //   overlay: {
  //     warnings: false,
  //     errors: false
  //   }
  // },
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 9 //设置要替换的最小像素值(3px会被转rem)。 默认 0
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