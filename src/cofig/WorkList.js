const works = [
  {
    front: {
      imgUrl: 'worksImg/img_00.png',
      tit: '영풍문 - 리뉴얼 보수작업(각종 이슈처리 및 기능 누락 부분 추가)'
    },
    back: {
      bTit: '영품문고 리뉴얼 (쇼핑몰, 관리자 페이지)',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: [ 'Vue.js3', 'Emitter', 'Moment', 'lodash', 'swiper', 'v-click-outside' , 'vee-validate', 'tui-date-picker', 'dompurify', 'vue3-print-nb'],
        },
        {
          bListTit: '작업내역 - 영푼문고 리뉴얼 사이트',
          bListDesc: [
            '이슈내용: ',
            '검색인풋 포커스시 키,마우스 이벤트(호버 및 엔터 또는 클릭 시 검색어 변경등)',
            '테마카테고리 선택시 추천 테마 페이지 변경', '장바구니 재접속시 이전 데이터 초기화X(ex. 책 갯수 등)',
            '검색 리스트 데이터 변동시 기능 초기화(페이지네이션등)',
            '리뷰내용 4줄 이상일 시 더 보기 버튼 + 말줄임표 생성',
            '내 서재 상품 삭제 버튼 기능',
            'Swiper + Thumbs swiper 연동',
            '재고지점 위치 출력',
            'V-html -> HTML형태로 출력되는 문제 수정',
            '성인인증 및 각종 메시지 기능 추가 ',
            '각종 CSS 문제 수정 - 주로 Flex 관련 또는 text-overflow, max-width, float(clear)등의 문제',
            '모달 팝업 두번 여닫을 시 스크롤 고정 - 라이브러리 내 바닐라 스크립트(css) 문제 수정등'
          ],
        },
        {
          bListTit: '작업내역 - 관리자 페이지 리뉴얼',
          bListDesc: ['성인인증 요청 및 Pass인증으로 이동', '검색리스트 목록 Api변경시 '],
        }
      ]
      ,
      btn: '오픈예정 상태, 이동 불가',
      btnUrl: 'https://www.skylife.co.kr/BE/event/detail?id=652',
      btnClass: 'disable'
    }
  },
  {
    front: {
      imgUrl: 'worksImg/img_01.png',
      tit: 'SkyLife - 페이지 공유'
    },
    back: {
      bTit: '이벤트 페이지 공유하기',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: [ 'Nuxt.Js', ' Fb.sdk', ' Kakao\.sdk', ' ClipBoard Api', ' AsyncData', ' mixins', ' ngrok' ]
        },
      ],
      btn: 'Url로 이동',
      btnUrl: 'https://www.skylife.co.kr/BE/event/detail?id=652'
    }
  },
  {
    front: {
      imgUrl: 'worksImg/img_02.png',
      tit: 'SkyLife - 유심가입 (시간제한)'
    },
    back: {
      bTit: '유심가입 페이지 (이용시간)',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: ['Nuxt.Js', ' JS(Es6)', ' RegExp', ' Rx.Js', ' Vue-Router', ' Watch', ' V-Model'],
        }
      ],
      btn: 'Url로 이동',
      btnUrl: 'https://shop.skylife.co.kr/mvno/appinfo?usimType=2'
    }
  },
  {
    front: {
      imgUrl: 'worksImg/img_03.png',
      tit: 'SkyLife - 모바일 로그인 추가'
    },
    back: {
      bTit: '모바일 로그인 - 번호,생년월일,sms인증',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: ['Nuxt.Js', ' JS(Es6)', ' Moment.Js', ' Rx.Js']
        }
      ],
      btn: 'Url로 이동',
      btnUrl: 'https://www.skylife.co.kr/member/login'
    }
  },
  {
    front: {
      imgUrl: 'worksImg/img_04.png',
      tit: 'SkyLife - 유심가입 (시간제한)'
    },
    back: {
      bTit: '신규 페이지 및 상품 생성',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: ['Nuxt.Js', ' JS(Es6)', ' i18n', ' Rx.Js', ' ui관련 라이브러리(셀렉터등)']
        },
      ],
      btn: 'Url로 이동',
      btnUrl: 'https://www.skylife.co.kr/product/tv/service/app/disneyplus',
      btnUrl2: 'https://shop.skylife.co.kr/directOrder/myPriceType?type=tv'
    }
  },
  {
    front: {
      imgUrl: 'worksImg/img_05.png',
      tit: 'KS-CODI(반응형 페이지 제작)'
    },
    back: {
      bTit: 'KS-SQI(반응형 페이지 제작)',
      bLists:[
        {
          bListTit: '관련 사용기술',
          bListDesc: ['Html', ' JS(Es6)', ' J-Query', ' Aos', ' Gsap', ' ScrollTrigger', ' 풀페이지와 슬라이더&Progress등을 새로 제작'],
        }
      ],
      btn: 'Url로 이동',
      btnUrl: 'https://shop.skylife.co.kr/mvno/appinfo?usimType=2'
    }
  }
]

export default works