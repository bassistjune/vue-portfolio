// const removeConsolePlugin = []
// if(process.env.NODE_ENV === 'production') {
//   removeConsolePlugin.push([
//     "transform-remove-console",
//     { exclude: ["error", "warn"] },
//   ])
// }
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // plugins: removeConsolePlugin
  // removeConsolePlugin 사용시 package.json에
  //  "build": "vue-cli-service build  --mode production", 로 수정 + 모바일 이슈 해결해야함
}