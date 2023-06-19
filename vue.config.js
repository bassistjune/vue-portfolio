const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/project-myhome/',
  outputDir: 'docs',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: 'all'
  }
})
