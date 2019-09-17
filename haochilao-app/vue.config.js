/**
 * vue项目核心配置文件
 */
module.exports = {
  // Webpack开发服务器设置
  devServer: {
    host: '192.168.0.105',
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
  outputDir: 'haochilao'
}