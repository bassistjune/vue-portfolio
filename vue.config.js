const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/<repository name>/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
  }
})
