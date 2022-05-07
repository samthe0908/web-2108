import Axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost'
const serverPort = process.env.REACT_APP_SERVER_PORT
const url = `${ serverUrl }:${ serverPort }`
const TaskApi = Axios.create({
    baseURL: url
})

export default TaskApi