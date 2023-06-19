import axios from 'axios'

export default axios.create({
  baseUrl: '//localhost:8000/api'
})