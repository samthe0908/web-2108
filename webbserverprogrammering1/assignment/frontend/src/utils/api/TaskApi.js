import Axios from 'axios'

const TaskApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default TaskApi