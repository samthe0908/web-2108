import http from  '../MyApi'

const alive = () => {
    return http.get('/')

}

const welcome_message = (name) => {
  return http.post(`/name/${name}`)
}

export default {
    alive,
    welcome_message,
}