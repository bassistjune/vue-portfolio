const Mainpage = {
  Intro: {
    title: '안녕하세요!\n공부하는 프론트엔드 개발자\n한준희 입니다.',
    desc: '제 포트폴리오 페이지에 와주셔서 감사합니다.\n' +
      'IntelliJ등을 통해 제작 된 Vue.js3 프로젝트 입니다.'
  },
  Faq: {
    title: '포트폴리오 페이지에 대한 FAQ\n',
    list: [
      { type: 'Layout', value: ['\'css Flex\'와 \'JavaScript(es6)\'를 이용한 \'사이드바\' 형태의 레이아웃 제작.', 'Input[type="range"]를 통해 레이아웃 유동적 변경, 클래스 토글 형태의 두 가지 레이아웃 적용']},
      { type: 'Router', value: ['현 위치의 동일 path 이동 시도시엔 새로고침 효과', '잘못 된 하위 경로 입력시, ErrorLayout 사용 + 특정 시간(7초) 뒤 메인으로 router 푸쉬', '2Depth에 맞게 active class 처리(삼항연산자등을 통한 Class제어 등)']},
      { type: 'Store', value: ['localstorage를 사용하지 않은 간단한 To-Do-List 제작']},
      { type: 'Axios', value: ['Axios를 이용한 게시판 리스트']}
    ]
  }
}

export default Mainpage
