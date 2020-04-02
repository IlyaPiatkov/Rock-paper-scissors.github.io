import * as axios from "axios"

const instance = axios.create({
  baseURL: "http://tornadogame.club/api/v1.0",
  withCredentials: true
})

export const authAPI = {
  login(email, password) {
    return instance.post("/login/", { email, password })
  },
  logout() {
    return instance.delete("/login/")
  },
  relogin(refresh) {
    return instance.post("/relogin/", { refresh })
  },
  registr(email, password) {
    return instance.post("/signup/", { email, password })
  }
}

export const roomAPI = {
  create(capacity, authToken) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
    return instance.post("/createRoom/", { capacity })
  },
  search() {
    return instance.get("/getActiveRooms/")
  }
}
