const aboutList = {
  top: {
    myImg: [
      {
        imgUrl: '/aboutImg/me_01.jpeg',
        imgDesc: '야구를 좋아해요! (SSG팬)' + `\n` + '유튜브 촬영을 야구장에서 하게되어 찍은 사진입니다!'
      },
      {
        imgUrl: '/aboutImg/me_02.jpeg',
        imgDesc: '(지금은 찾아 볼 수 없습니다..)' + `\n` + '과거의 한준희1 입니다.'
      },
      {
        imgUrl: '/aboutImg/me_03.jpeg',
        imgDesc: '악기를 전공했어요!' + `\n` + '베이스기타 연주하는 사진입니다.'
      },
      {
        imgUrl: '/aboutImg/me_04.jpeg',
        imgDesc: '(지금은 찾아 볼 수 없습니다..)' + `\n` + '여자친구와 익선동에..'
      },
      {
        imgUrl: '/aboutImg/me_06.jpeg',
        imgDesc: '고향집 시골 댕댕이'+ `\n` + '\'송이\'입니다🐶 '
      }
    ],
    txt: {
      title: '안녕하세요! 프론트엔드 개발자 한준희입니다.',
      intro: '처음엔 호기심 이었지만, 지금은 직업이 된 \'개발\'.' + `\n` + '기왕이면 멋진 회사에서 제대로 쓰이려 합니다!' +`\n` + '항상 공부하는 동료, 항상 마감을 잘 지키는 동료,' + `\n` + '책음을 다 하는 동료가 되어 여러분과 함께 하겠습니다.',
      myInfo: [
        { class: 'pi-user', value: '한 준 희' },
        { class: 'pi-calendar', value: '1989. 07. 26' },
        { class: 'pi-mobile', value: '010-3278-2063' },
        { class: 'pi-envelope', value: 'bassistjune@gmail.com' },
        { class: 'pi-home', value: '서울 관악구 청림동' },
        { class: 'pi-briefcase', value: '서야고등학교 졸업' + `\n` + '호서대학교 실용음악과 중퇴(3학년까지 수료)' }
      ]
    }
  },
  middle: {
    list: [
      { type: 'FrameWork', value: ['Vue.Js', ' Nuxt.Js', ' Node.Js'] },
      { type: 'Language', value: ['JavaScript', ' TypeScript', ' J-Query'] },
      { type: 'MarkUp', value: ['Html', ' css', ' scss'] },
      { type: 'Tool', value: ['Git', ' Ftp', ' GitHub', ' GitLab'] },
      { type: 'Editor & Etc', value: ['VsCode', ' EditorPlus' ,' IntelliJ', ' WebStorm', ' Fork', ' Nova', ' Photoshop', ' Xd', '...'] }
    ],
    other: { desc: '그 외 실무경험 툴 & 라이브러리', value: ['Gas Mask', ' PostMan', ' Rxjs', ' Moment', ' Jenkins', ' i18n', ' dayJs', ' vue-custom-scrollbar', ' vue-social-sharing', ' ngrok', ' etc...'] }
  }
}

export default aboutList