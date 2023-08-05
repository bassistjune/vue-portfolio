import axios from 'axios'


// 일단 개별 페이지에서 사용. - 현 페이지는 skip
export default axios.create({
  baseUrl: 'https://my-vue-project-f316fbe23105.herokuapp.com/'
})
