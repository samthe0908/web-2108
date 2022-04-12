import Axios from 'axios'

const MyApi = Axios.create({
    baseUrl: 'http://localhost:3001'
})

export default MyApi
