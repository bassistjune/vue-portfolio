const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  lintOnSave: false,
  publicPath: '/vue-portfolio/',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
