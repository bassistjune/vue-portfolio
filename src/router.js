import { createWebHistory, createRouter } from 'vue-router'

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
          path: '/About',
          name: '프로필',
          component: () => import('./views/About/index')
        },
        {
          path: '/Portfolio',
          name: '포트폴리오',
          component: () => import('./views/Portfolio/index')
        },
        // {
        //   name: '연습장',
        //   path: '/Notes',
        //   component: () => import('./views/Notes/index')
        // },
        {
          name: 'To-Do-List',
          path: '/Visitors',
          component: () => import('./views/Visitors/index')
        },
        {
          name: '자료실',
          path: '/Personal',
          component: () => import('./views/Personal/index'),
          children: [
            {
              name: 'etc',
              path: '/PersonalEtc',
              component: () => import('./views/Personal/Etc/index')
            },
            {
              name: '사진첩',
              path: '/PersonalPhotoAlbum',
              component: () => import('./views/Personal/PhotoAlbum/index')
            }
          ]
        },
        {
          name: '게시판',
          path: '/Board',
          component: () => import('./views/Board/index'),
          children: [
            {
              name: '게시판목록',
              path: '/Board/BoardList',
              component: () => import('./views/Board/Includes/BoardListPage')
            },
            {
              name: '게시판보기',
              path: '/Board/BoardView',
              component: () => import('./views/Board/Includes/BoardViewPage')
            },
            {
              name: '게시판쓰기',
              path: '/Board/BoardWrite',
              component: () => import('./views/Board/Includes/BoardWritePage')
            }
          ]
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'errorLayout',
      component: () => import('@/layout/Error'),
      children: [
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('./views/Error/index')
        }
      ]
    }
  ],
  base: process.env.BASE_URL,
  linkExactActiveClass: 'activeMenu',
  beforeRouteUpdate (to, from, next) {


    next() // DO IT!
  },
  scrollBehavior(to, from, savedPosition) {
    // 항상 맨 위로 스크롤

    return {
      el: '.inner',
      behavior: 'smooth',
      x: 0
    }
  }
})

// 설정한 VueRouter 내보낸다.
export default router
