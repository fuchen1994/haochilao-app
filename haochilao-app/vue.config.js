/**
 * vue项目核心配置文件
 */
module.exports = {
  // Webpack开发服务器设置
  devServer: {
    host: '192.168.0.100',
    port: 8090,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/app': {
        target: 'http://127.0.0.1:5050', // 测试环境
        // target: 'http://club.10155.com', // 正式环境
        ws: false,
        changeOrigin: true
      },
    }
  },

  outputDir: 'haochilao',

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
