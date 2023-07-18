const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  lintOnSave: false,
  publicPath: '/',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
