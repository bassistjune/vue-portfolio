import { createWebHistory, createRouter } from 'vue-router'

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layout/Basic'),
      children: [
        {
          path: '/',
          name: '메인',
          component: () => import('./views/Home/index')
        },
        {
          path: '/Introduce',
          name: '본인소개',
          component: () => import('./views/Introduce/index')
        },
        {
          name: '포트폴리오',
          path: '/Portfolio',
          component: () => import('./views/Portfolio/index')
        },
        {
          name: '작업연습장',
          path: '/Notes',
          component: () => import('./views/Notes/index')
        },
        {
          name: '목표&지향',
          path: '/Targets',
          component: () => import('./views/Target/index')
        },
        {
          name: '개인적인것들',
          path: '/Personal',
          component: () => import('./views/Personal/index'),
          children: [
            {
              name: '개인소개',
              path: '/Personal/PersonalList',
              component: () => import('./views/Personal/List/index')
            },
            {
              name: '사진첩',
              path: '/Personal/PersonalPhotos',
              component: () => import('./views/Personal/PhotoAlbum/index')
            }
          ]
        },
        {
          name: '게시판',
          path: '/Board',
          component: () => import('./views/Board/index')
        }
      ]
    }
  ],
  // base: process.env.BASE_URL,
  linkExactActiveClass: 'activeMenu',
  scrollBehavior: function (to, from, savedPosition) {
    // 항상 맨 위로 스크롤
    return { top: 0 }
  }
})

// 설정한 VueRouter 내보낸다.
export default router
