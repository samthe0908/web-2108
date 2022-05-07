import  http from '../TaskApi.js'

const alive = () => {
    return http.get('/')
}
export default {
    alive
}