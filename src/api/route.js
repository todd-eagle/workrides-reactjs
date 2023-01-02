import axios from 'axios'

const url = window.location.href

  export default axios.create({
     baseUrl: `${url}:3030`
  })