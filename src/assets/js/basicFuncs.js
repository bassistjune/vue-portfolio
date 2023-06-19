import browserJs from '@/assets/js/funcJs/browser.min'
import breakPoint from '@/assets/js/funcJs/breakpoints.min'
import utilJs from '@/assets/js/funcJs/util'

const basicWrapFunc = () => {
  browserJs.browserFunc()
  breakPoint.breakPointFunc()
  utilJs.utilJQFunc()
}

export default { basicWrapFunc }
