const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  lintOnSave: false,
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-portfolio/' : '/',
  publicPath: '/',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
