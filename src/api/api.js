import * as axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // withCredentials: true,
  // headers: {'API-KEY': 'KEY'},
});

export const authAPI = {
  login(email, password) {
    return instance.post('/auth/login', { email, password })
  },
  logout() {
    return instance.delete('/auth/login')
  }
}
