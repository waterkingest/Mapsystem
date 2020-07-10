module.exports = {
  lintOnSave: false,
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    }
  },
  runtimeCompiler: true,
    publicPath: './'

};
