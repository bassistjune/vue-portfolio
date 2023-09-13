const removeConsolePlugin = []
const transformRuntime = []
if(process.env.NODE_ENV === 'production') {
  removeConsolePlugin.push([
    'transform-remove-console',
    { exclude: ['error', 'warn'] },
  ])
  transformRuntime.push([])
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: removeConsolePlugin,
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
}