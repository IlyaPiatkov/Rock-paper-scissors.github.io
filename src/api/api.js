import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'http://tornadogame.club/api/v1.0',
  withCredentials: true,
});

export const authAPI = {
  login(email, password) {
    return instance.post('/login/', { email, password })
  },
  logout() {
    return instance.delete('/login/')
  }
}
