const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-portfolio/' : '/index.html', // 배포를 위한 (git repo..name) 설정
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
