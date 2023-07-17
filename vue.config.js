const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'));
  },
  outputDir: './docs',
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true
// {
//   rewrites: [
//     { from: /^\/Personal\/img\/.*$/, to: '/img/[0]' },
//     { from: /^\/Personal\/(.*)/, to: '/$1' },
//   ],
// },
  }
})
