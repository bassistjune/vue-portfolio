const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
