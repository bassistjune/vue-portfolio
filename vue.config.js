const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/project-myhome/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: 'all'
  }
})
