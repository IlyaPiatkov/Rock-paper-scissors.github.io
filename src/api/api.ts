import axios from "axios"

const instance = axios.create({
  baseURL: "https://tornadogame.club/api/v1.0",
  withCredentials: true
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

type LoginType = {
  data: {
    access: string
    refresh: string
    tokenExpire: number
    email: string
    userId: number
  }
  messages: Array<string>
  resultCode: ResultCodeEnum
}

type LogoutType = {
  data: {}
  messages: Array<string>
  resultCode: ResultCodeEnum
}

type ReloginType = {
  data: {
    access: string
    refresh: string
    tokenExpire: number
  }
  messages: Array<string>
  resultCode: ResultCodeEnum
}

type RegistrationType = {
  data: {
    email: string
    userId: number
  }
  messages: Array<string>
  resultCode: ResultCodeEnum
}

export const authAPI = {
  login(email: string, password: string) {
    return instance
      .post<LoginType>("/login/", { email, password })
      .then(response => response.data)
  },
  logout(authToken: string | null) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
    return instance.post<LogoutType>("/logout/").then(response => response.data)
  },
  relogin(refresh: string | null) {
    return instance
      .post<ReloginType>("/relogin/", { refresh })
      .then(response => response.data)
  },
  registr(email: string, password: string) {
    return instance
      .post<RegistrationType>("/signup/", { email, password })
      .then(response => response.data)
  }
}

export const roomAPI = {
  create(capacity: string, authToken: string) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
    return instance.post("/createRoom/", { capacity })
  },
  search() {
    return instance.get("/getActiveRooms/")
  }
}

type UserType = {
  data: {
    userId: number
    username: string
  }
  messages: Array<string>
  resultCode: ResultCodeEnum
}

export const profileAPI = {
  setUser(authToken: string | null, userData: any) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
    return instance
      .post<UserType>("/profile/", userData)
      .then(response => response.data)
  },
  getUser(authToken: string | null) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
    return instance.get<UserType>("/profile/").then(response => response.data)
  }
}
