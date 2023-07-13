import axios from 'axios'

export default axios.create({
  baseUrl: '//localhost:8081/api'
})
